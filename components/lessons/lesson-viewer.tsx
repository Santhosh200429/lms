'use client'

import { Lesson } from '@/lib/mock-data'

interface LessonViewerProps {
  lesson: Lesson
}

export default function LessonViewer({ lesson }: LessonViewerProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">{lesson.title}</h2>

      {/* Video Player */}
      <div className="relative w-full bg-black rounded-lg overflow-hidden aspect-video">
        <iframe
          width="100%"
          height="100%"
          src={lesson.videoUrl}
          title={lesson.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Lesson Info */}
      <div className="bg-muted/50 rounded-lg p-6">
        <p className="text-muted-foreground mb-4">{lesson.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Duration: {lesson.duration} minutes</span>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Mark as Complete
          </button>
        </div>
      </div>

      {/* Notes Section */}
      <div className="bg-background border border-border rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-4">Lesson Notes</h3>
        <textarea
          placeholder="Add your notes here..."
          className="w-full h-32 p-4 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        ></textarea>
        <button className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
          Save Notes
        </button>
      </div>
    </div>
  )
}
