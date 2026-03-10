'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/layout/dashboard-layout'
import DashboardContent from '@/components/dashboard/dashboard-content'
import CourseBrowser from '@/components/courses/course-browser'

type DashboardTab = 'overview' | 'courses' | 'assignments'

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview')

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Dashboard Tabs */}
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
            Browse Courses
          </button>
          <button
            onClick={() => setActiveTab('assignments')}
            className={`pb-3 px-4 font-medium transition-colors ${
              activeTab === 'assignments'
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Assignments
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && <DashboardContent />}
        {activeTab === 'courses' && <CourseBrowser />}
        {activeTab === 'assignments' && (
          <div className="bg-background border border-border rounded-lg p-8 text-center">
            <p className="text-muted-foreground">Assignments feature coming soon</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
