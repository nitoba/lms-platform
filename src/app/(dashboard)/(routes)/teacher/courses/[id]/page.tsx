type Props = {
  params: {
    id: string
  }
}

export default function CoursePage({ params }: Props) {
  return (
    <div>
      <h1>{params?.id}</h1>
    </div>
  )
}
