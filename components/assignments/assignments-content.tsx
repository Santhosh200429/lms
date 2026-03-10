'use client'

import { mockAssignments, mockCourses } from '@/lib/mock-data'
import { CheckCircle, Clock, AlertCircle } from 'lucide-react'

export default function AssignmentsContent() {
  const submitted = mockAssignments.filter((a) => a.submitted)
  const pending = mockAssignments.filter((a) => !a.submitted)

  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-background border border-border rounded-lg p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Submitted</p>
              <p className="text-2xl font-bold text-foreground">{submitted.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-background border border-border rounded-lg p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
              <Clock className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pending</p>
              <p className="text-2xl font-bold text-foreground">{pending.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-background border border-border rounded-lg p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
              <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg. Grade</p>
              <p className="text-2xl font-bold text-foreground">
                {submitted.length > 0
                  ? Math.round(
                      submitted.reduce((sum, a) => sum + (a.grade || 0), 0) / submitted.length
                    )
                  : 'N/A'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pending Assignments */}
      {pending.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Pending Assignments</h2>
          <div className="space-y-4">
            {pending.map((assignment) => {
              const course = mockCourses.find((c) => c.id === assignment.courseId)
              return (
                <div
                  key={assignment.id}
                  className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">{assignment.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{course?.title}</p>
                    </div>
                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 text-xs font-medium rounded-full">
                      Pending
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{assignment.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Due: <strong>{assignment.dueDate}</strong>
                    </span>
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                      Submit Assignment
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Submitted Assignments */}
      {submitted.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Submitted Assignments</h2>
          <div className="space-y-4">
            {submitted.map((assignment) => {
              const course = mockCourses.find((c) => c.id === assignment.courseId)
              return (
                <div
                  key={assignment.id}
                  className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">{assignment.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{course?.title}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                      Graded
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{assignment.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">
                        Submitted: <strong>{assignment.dueDate}</strong>
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Grade: <strong className="text-lg text-primary">{assignment.grade}%</strong>
                      </span>
                    </div>
                    <button className="px-4 py-2 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors">
                      View Feedback
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {mockAssignments.length === 0 && (
        <div className="text-center py-12 bg-background border border-border rounded-lg">
          <p className="text-lg text-muted-foreground">No assignments yet</p>
        </div>
      )}
    </div>
  )
}
