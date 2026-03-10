'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { mockCourses } from '@/lib/mock-data'
import { Search } from 'lucide-react'

type FilterLevel = 'all' | 'Beginner' | 'Intermediate' | 'Advanced'

export default function CourseBrowser() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLevel, setSelectedLevel] = useState<FilterLevel>('all')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredCourses = useMemo(() => {
    return mockCourses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel
      const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory

      return matchesSearch && matchesLevel && matchesCategory
    })
  }, [searchTerm, selectedLevel, selectedCategory])

  const categories = ['all', ...new Set(mockCourses.map((c) => c.category))]
  const levels: FilterLevel[] = ['all', 'Beginner', 'Intermediate', 'Advanced']

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-3 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-foreground mb-2">Level</label>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value as FilterLevel)}
            className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {levels.map((level) => (
              <option key={level} value={level}>
                {level === 'all' ? 'All Levels' : level}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-foreground mb-2">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results */}
      <div>
        <p className="text-sm text-muted-foreground mb-4">
          Showing {filteredCourses.length} of {mockCourses.length} courses
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
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
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {course.level}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{course.description}</p>
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-border">
                  <span className="text-xs text-muted-foreground">{course.instructor}</span>
                  <span className="text-sm font-medium text-foreground">⭐ {course.rating}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{course.students.toLocaleString()} students</span>
                  <span>{course.lessons.length} lessons</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No courses found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
