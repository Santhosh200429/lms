'use client'

import { useState } from 'react'
import { Course } from '@/lib/mock-data'
import { ChevronDown, ChevronUp, Clock, Users, Award } from 'lucide-react'
import LessonViewer from '@/components/lessons/lesson-viewer'

interface CourseDetailProps {
  course: Course
}

export default function CourseDetail({ course }: CourseDetailProps) {
  const [expandedLesson, setExpandedLesson] = useState<string | null>(null)
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(course.lessons[0]?.id || null)

  const selectedLesson = course.lessons.find((l) => l.id === selectedLessonId)

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-6">
        {/* Course Header */}
        <div>
          <div className="relative overflow-hidden h-96 bg-muted rounded-lg mb-6">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">{course.title}</h1>
          <p className="text-lg text-muted-foreground mb-6">{course.description}</p>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Instructor</p>
              <p className="font-semibold text-foreground mt-1">{course.instructor}</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold text-foreground mt-1">{course.duration}</p>
                </div>
              </div>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <Users size={16} className="text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Students</p>
                  <p className="font-semibold text-foreground mt-1">{course.students.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <Award size={16} className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Rating</p>
                  <p className="font-semibold text-foreground mt-1">⭐ {course.rating}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Player */}
        {selectedLesson && <LessonViewer lesson={selectedLesson} />}
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1">
        <div className="bg-background border border-border rounded-lg p-6 sticky top-8">
          <h2 className="text-xl font-bold text-foreground mb-4">Course Content</h2>
          <div className="space-y-2">
            {course.lessons.map((lesson) => (
              <div key={lesson.id}>
                <button
                  onClick={() => {
                    setSelectedLessonId(lesson.id)
                    setExpandedLesson(expandedLesson === lesson.id ? null : lesson.id)
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                    selectedLessonId === lesson.id
                      ? 'bg-primary/10 text-primary'
                      : 'bg-muted/50 hover:bg-muted text-foreground'
                  }`}
                >
                  <div className="text-left flex-1">
                    <p className="font-medium text-sm">{lesson.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{lesson.duration} mins</p>
                  </div>
                  {expandedLesson === lesson.id ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>
                {expandedLesson === lesson.id && (
                  <div className="pl-4 mt-2 pb-2">
                    <p className="text-xs text-muted-foreground">{lesson.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-2 px-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Complete Course
          </button>
        </div>
      </div>
    </div>
  )
}
