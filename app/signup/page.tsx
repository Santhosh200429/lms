'use client'

import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import SignupForm from '@/components/auth/signup-form'

export default function SignupPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsReady(true)
    if (user) {
      router.push('/')
    }
  }, [user, router])

  if (!isReady) {
    return null
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <SignupForm />
    </div>
  )
}
