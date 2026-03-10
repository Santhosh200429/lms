'use client'

import DashboardLayout from '@/components/layout/dashboard-layout'
import CourseBrowser from '@/components/courses/course-browser'

export default function CoursesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Browse Courses</h1>
          <p className="text-muted-foreground">Explore our comprehensive course catalog</p>
        </div>
        <CourseBrowser />
      </div>
    </DashboardLayout>
  )
}
