'use client'

import Link from 'next/link'
import { mockEnrolledCourses, mockAssignments } from '@/lib/mock-data'
import { Clock, Users, Award, BookOpen } from 'lucide-react'

export default function DashboardContent() {
  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-background border border-border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium">Enrolled Courses</p>
              <p className="text-3xl font-bold text-foreground mt-2">{mockEnrolledCourses.length}</p>
            </div>
            <BookOpen className="w-10 h-10 text-primary/20" />
          </div>
        </div>
        <div className="bg-background border border-border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium">In Progress</p>
              <p className="text-3xl font-bold text-foreground mt-2">2</p>
            </div>
            <Clock className="w-10 h-10 text-accent/20" />
          </div>
        </div>
        <div className="bg-background border border-border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium">Pending Assignments</p>
              <p className="text-3xl font-bold text-foreground mt-2">1</p>
            </div>
            <Award className="w-10 h-10 text-primary/20" />
          </div>
        </div>
        <div className="bg-background border border-border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium">Avg. Progress</p>
              <p className="text-3xl font-bold text-foreground mt-2">67%</p>
            </div>
            <Users className="w-10 h-10 text-accent/20" />
          </div>
        </div>
      </div>

      {/* Enrolled Courses */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Your Courses</h2>
          <Link href="#" className="text-primary hover:text-primary/90 font-medium">
            View All
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {mockEnrolledCourses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="group bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all"
            >
              <div className="relative overflow-hidden h-40 bg-muted">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{course.instructor}</p>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-1/3"></div>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">33%</span>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{course.lessons.length} lessons</span>
                  <span>⭐ {course.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pending Assignments */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Pending Assignments</h2>
        <div className="space-y-4">
          {mockAssignments
            .filter((a) => !a.submitted)
            .map((assignment) => (
              <Link
                key={assignment.id}
                href={`/assignments/${assignment.id}`}
                className="flex items-center justify-between bg-background border border-border rounded-lg p-4 hover:border-primary/50 transition-colors group"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {assignment.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{assignment.description}</p>
                </div>
                <div className="ml-4 text-right">
                  <p className="text-sm font-medium text-foreground">Due:</p>
                  <p className="text-sm text-primary">{assignment.dueDate}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
