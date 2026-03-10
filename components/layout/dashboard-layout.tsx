'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import { Menu, X, LogOut, BookOpen, Home, Settings, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const { user, logout } = useAuth()
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/' },
    { icon: BookOpen, label: 'Courses', href: '/courses' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ]

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-foreground/5 border-r border-border transition-all duration-300 fixed h-screen left-0 top-0 z-40`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="h-16 border-b border-border flex items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-primary" />
              {sidebarOpen && <span className="font-bold text-foreground">Learning</span>}
            </Link>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-muted rounded-lg transition-colors lg:hidden"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-auto">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                  <Icon size={20} />
                  {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border space-y-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              {sidebarOpen && <span className="text-sm font-medium">Theme</span>}
            </button>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-red-500 transition-colors"
            >
              <LogOut size={20} />
              {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300 flex-1 flex flex-col`}>
        {/* Header */}
        <header className="h-16 border-b border-border bg-background flex items-center justify-between px-8">
          <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
          <div className="flex items-center gap-4">
            {user && (
              <div className="flex items-center gap-3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full border border-border"
                />
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-foreground">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
