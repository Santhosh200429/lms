'use client'

import { mockCourses, mockAssignments } from '@/lib/mock-data'
import { TrendingUp, Users, BookOpen, Award } from 'lucide-react'

export default function AdminOverview() {
  const totalStudents = 12543
  const totalEnrollments = mockCourses.reduce((sum, c) => sum + c.students, 0)
  const avgRating = (mockCourses.reduce((sum, c) => sum + c.rating, 0) / mockCourses.length).toFixed(1)

  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-background border border-border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium">Total Students</p>
              <p className="text-3xl font-bold text-foreground mt-2">{totalStudents.toLocaleString()}</p>
            </div>
            <Users className="w-10 h-10 text-primary/20" />
          </div>
        </div>
        <div className="bg-background border border-border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium">Active Courses</p>
              <p className="text-3xl font-bold text-foreground mt-2">{mockCourses.length}</p>
            </div>
            <BookOpen className="w-10 h-10 text-accent/20" />
          </div>
        </div>
        <div className="bg-background border border-border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium">Total Enrollments</p>
              <p className="text-3xl font-bold text-foreground mt-2">{totalEnrollments.toLocaleString()}</p>
            </div>
            <TrendingUp className="w-10 h-10 text-primary/20" />
          </div>
        </div>
        <div className="bg-background border border-border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium">Avg. Rating</p>
              <p className="text-3xl font-bold text-foreground mt-2">⭐ {avgRating}</p>
            </div>
            <Award className="w-10 h-10 text-accent/20" />
          </div>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-background border border-border rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-4">Enrollment Trends</h3>
          <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Chart visualization coming soon</p>
          </div>
        </div>
        <div className="bg-background border border-border rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-4">Popular Courses</h3>
          <div className="space-y-3">
            {mockCourses.slice(0, 4).map((course) => (
              <div key={course.id} className="flex items-center justify-between pb-3 border-b border-border last:border-0">
                <span className="text-foreground font-medium">{course.title}</span>
                <span className="text-sm text-muted-foreground">{course.students.toLocaleString()} students</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-background border border-border rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-4">Recent Submissions</h3>
        <div className="space-y-3">
          {mockAssignments.slice(0, 3).map((assignment) => (
            <div key={assignment.id} className="flex items-center justify-between pb-3 border-b border-border last:border-0">
              <div>
                <p className="text-foreground font-medium">{assignment.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{assignment.dueDate}</p>
              </div>
              <span className={`text-sm font-medium ${assignment.submitted ? 'text-green-600' : 'text-yellow-600'}`}>
                {assignment.submitted ? 'Submitted' : 'Pending'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
