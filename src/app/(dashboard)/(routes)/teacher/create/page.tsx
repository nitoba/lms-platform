import { CreateCourseForm } from './_components/create-course-form'

export default function CreateCourse() {
  return (
    <div className="mx-auto flex h-full max-w-5xl items-center p-6 md:justify-center">
      <div>
        <h1 className="text-2xl">Name your course</h1>
        <p>
          What would you like to name your course? Don&apos;t worry, you can
          change this later.
        </p>
        <CreateCourseForm />
      </div>
    </div>
  )
}
