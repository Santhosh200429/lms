'use client'

import { mockCourses } from '@/lib/mock-data'
import { Edit2, Trash2, Plus } from 'lucide-react'

export default function CourseManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Manage Courses</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
          <Plus size={20} />
          Create Course
        </button>
      </div>

      {/* Course Table */}
      <div className="bg-background border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Course Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Instructor</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Students</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Rating</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockCourses.map((course) => (
                <tr key={course.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-foreground">{course.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{course.category}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-foreground">{course.instructor}</td>
                  <td className="px-6 py-4 text-foreground">{course.students.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className="text-foreground font-medium">⭐ {course.rating}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg transition-colors text-muted-foreground hover:text-red-600 dark:hover:text-red-400">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
