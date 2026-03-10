'use client'

import DashboardLayout from '@/components/layout/dashboard-layout'
import { useAuth } from '@/lib/auth-context'
import { Save } from 'lucide-react'
import { useState } from 'react'

export default function SettingsPage() {
  const { user } = useAuth()
  const [displayName, setDisplayName] = useState(user?.name || '')
  const [email, setEmail] = useState(user?.email || '')

  const handleSave = () => {
    // TODO: Implement settings save functionality
    alert('Settings saved!')
  }

  return (
    <DashboardLayout>
      <div className="max-w-2xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences</p>
        </div>

        {/* Profile Settings */}
        <div className="bg-background border border-border rounded-lg p-8 space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Profile Settings</h2>

          <div>
            <label htmlFor="displayName" className="block text-sm font-medium text-foreground mb-2">
              Display Name
            </label>
            <input
              id="displayName"
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Save size={20} />
            Save Changes
          </button>
        </div>

        {/* Notification Settings */}
        <div className="bg-background border border-border rounded-lg p-8 space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Notifications</h2>

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" defaultChecked className="w-4 h-4 border border-border rounded" />
            <span className="text-foreground">Email me about new courses</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" defaultChecked className="w-4 h-4 border border-border rounded" />
            <span className="text-foreground">Send assignment reminders</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" defaultChecked className="w-4 h-4 border border-border rounded" />
            <span className="text-foreground">Course completion notifications</span>
          </label>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-red-700 dark:text-red-400">Danger Zone</h2>
          <p className="text-sm text-red-600 dark:text-red-300">These actions cannot be undone.</p>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </DashboardLayout>
  )
}
