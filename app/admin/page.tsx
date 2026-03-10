'use client'

import DashboardLayout from '@/components/layout/dashboard-layout'
import { useState } from 'react'
import AdminOverview from '@/components/admin/admin-overview'
import CourseManagement from '@/components/admin/course-management'
import StudentManagement from '@/components/admin/student-management'

type AdminTab = 'overview' | 'courses' | 'students'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<AdminTab>('overview')

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage courses, students, and track analytics</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-border">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 px-4 font-medium transition-colors ${
              activeTab === 'overview'
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className={`pb-3 px-4 font-medium transition-colors ${
              activeTab === 'courses'
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Courses
          </button>
          <button
            onClick={() => setActiveTab('students')}
            className={`pb-3 px-4 font-medium transition-colors ${
              activeTab === 'students'
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Students
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && <AdminOverview />}
        {activeTab === 'courses' && <CourseManagement />}
        {activeTab === 'students' && <StudentManagement />}
      </div>
    </DashboardLayout>
  )
}
