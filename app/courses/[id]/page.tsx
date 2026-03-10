'use client'

import { mockCourses } from '@/lib/mock-data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import DashboardLayout from '@/components/layout/dashboard-layout'
import CourseDetail from '@/components/courses/course-detail'

interface CoursePageProps {
  params: Promise<{ id: string }>
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params
  const course = mockCourses.find((c) => c.id === id)

  if (!course) {
    notFound()
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Link href="/" className="text-primary hover:text-primary/90 font-medium">
          ← Back to Dashboard
        </Link>
        <CourseDetail course={course} />
      </div>
    </DashboardLayout>
  )
}
