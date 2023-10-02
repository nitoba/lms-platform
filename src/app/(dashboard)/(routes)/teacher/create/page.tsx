'use client'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from '@/components/ui/form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import axios, { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const formSchema = z.object({
  title: z
    .string({ required_error: 'Title is required' })
    .nonempty({ message: 'Title is required' }),
})

type CreateCourseSchema = z.infer<typeof formSchema>

export default function CreateCourse() {
  const router = useRouter()
  const form = useForm<CreateCourseSchema>({
    resolver: zodResolver(formSchema),
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
    <div className="mx-auto flex h-full max-w-5xl items-center p-6 md:justify-center">
      <div>
        <h1 className="text-2xl">Name your course</h1>
        <p>
          What would you like to name your course? Don&apos;t worry, you can
          change this later.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-8 space-y-8"
          >
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
      </div>
    </div>
  )
}
