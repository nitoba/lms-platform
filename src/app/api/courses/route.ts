import { prisma } from '@/lib/prisma'
import { auth } from '@clerk/nextjs'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { userId } = auth()

    if (!userId) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const { title } = await req.json()

    const course = await prisma.course.create({
      data: { userId, title },
    })

    return NextResponse.json(
      { message: 'Course created with success!', courseId: course.id },
      { status: 201 },
    )
  } catch (error) {
    console.log('[COURSES]', error)
  }
}
