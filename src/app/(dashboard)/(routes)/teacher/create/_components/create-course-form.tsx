'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import axios, { AxiosError } from 'axios'
import { z } from 'zod'

const createCourseSchema = z.object({
  title: z.string({ required_error: 'Title is required' }).nonempty(),
})

type CreateCourseSchema = z.infer<typeof createCourseSchema>

export function CreateCourseForm() {
  const router = useRouter()
  const form = useForm<CreateCourseSchema>({
    resolver: zodResolver(createCourseSchema),
  })

  async function onSubmit(form: CreateCourseSchema) {
    try {
      const response = await axios.post('/api/course', { title: form.title })
      router.replace(`/teacher/courses/${response.data.id}`)
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(`'Something went wrong:' ${error.response?.data}`, {
          position: 'bottom-right',
        })
        console.log('Something went wrong:', error.message)
      }
    }
  }

  const {
    formState: { isSubmitting },
  } = form
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  disabled={isSubmitting}
                  placeholder="course name..."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is a title for your course.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <Button variant="ghost" disabled={isSubmitting}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                Creating...
                <Loader2 className="ml-2 h-4 w-4" />
              </>
            ) : (
              'Create'
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
