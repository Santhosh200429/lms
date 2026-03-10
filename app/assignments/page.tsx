'use client'

import DashboardLayout from '@/components/layout/dashboard-layout'
import AssignmentsContent from '@/components/assignments/assignments-content'

export default function AssignmentsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Assignments</h1>
          <p className="text-muted-foreground">Track and submit your course assignments</p>
        </div>
        <AssignmentsContent />
      </div>
    </DashboardLayout>
  )
}
