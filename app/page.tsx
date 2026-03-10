'use client'

import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import LandingPage from '@/components/landing/landing-page'
import StudentDashboard from '@/components/dashboard/student-dashboard'

export default function Home() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user) {
    return <LandingPage />
  }

  return <StudentDashboard />
}
