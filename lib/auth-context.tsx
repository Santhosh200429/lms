'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export interface User {
  id: string
  email: string
  name: string
  role: 'student' | 'admin' | 'instructor'
  avatar?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string, name: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Simulate checking if user is logged in on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (e) {
        console.error('Failed to parse stored user', e)
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500))

    // Mock authentication
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
      role: 'student',
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
    }

    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
    setIsLoading(false)
  }

  const signup = async (email: string, password: string, name: string) => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 500))

    const mockUser: User = {
      id: Math.random().toString(),
      email,
      name,
      role: 'student',
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
    }

    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
    setIsLoading(false)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
