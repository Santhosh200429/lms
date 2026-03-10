'use client'

import { MoreVertical, Mail } from 'lucide-react'

const mockStudents = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com', courses: 3, status: 'Active' },
  { id: '2', name: 'Bob Smith', email: 'bob@example.com', courses: 2, status: 'Active' },
  { id: '3', name: 'Charlie Brown', email: 'charlie@example.com', courses: 4, status: 'Active' },
  { id: '4', name: 'Diana Prince', email: 'diana@example.com', courses: 1, status: 'Inactive' },
  { id: '5', name: 'Eve Wilson', email: 'eve@example.com', courses: 5, status: 'Active' },
]

export default function StudentManagement() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Manage Students</h2>

      {/* Students Table */}
      <div className="bg-background border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Student Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Email</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Enrolled Courses</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockStudents.map((student) => (
                <tr key={student.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.email}`}
                        alt={student.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <p className="font-medium text-foreground">{student.name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-foreground">{student.email}</td>
                  <td className="px-6 py-4 text-foreground">{student.courses}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        student.status === 'Active'
                          ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                          : 'bg-gray-100 dark:bg-gray-900/20 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground">
                        <Mail size={18} />
                      </button>
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground">
                        <MoreVertical size={18} />
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
