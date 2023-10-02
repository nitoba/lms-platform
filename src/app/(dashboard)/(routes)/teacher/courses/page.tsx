import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CoursesPage() {
  return (
    <div className="p-6">
      <Link href="/teacher/create">
        <Button>Create</Button>
      </Link>
    </div>
  )
}
