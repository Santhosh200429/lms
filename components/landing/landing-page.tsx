'use client'

import Link from 'next/link'
import { BookOpen, Users, Award, ArrowRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Learning Hub</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-foreground hover:text-primary">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-foreground mb-6 text-balance">
              Learn Anything, Anytime, Anywhere
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover thousands of courses from world-class instructors. Gain skills that matter and advance your career.
            </p>
            <div className="flex gap-4">
              <Link
                href="/signup"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 flex items-center gap-2"
              >
                Start Learning <ArrowRight size={20} />
              </Link>
              <Link
                href="/login"
                className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted"
              >
                Sign In
              </Link>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-12 h-96 flex items-center justify-center border border-border">
            <div className="text-center">
              <BookOpen className="w-24 h-24 text-primary/50 mx-auto mb-4" />
              <p className="text-muted-foreground">Premium learning experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-20 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose Learning Hub?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background border border-border rounded-lg p-8">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Comprehensive Courses</h3>
              <p className="text-muted-foreground">
                Access a wide range of courses from beginner to advanced levels, covering all major topics.
              </p>
            </div>
            <div className="bg-background border border-border rounded-lg p-8">
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Expert Instructors</h3>
              <p className="text-muted-foreground">
                Learn from industry professionals with years of experience and proven track records.
              </p>
            </div>
            <div className="bg-background border border-border rounded-lg p-8">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Recognized Certificates</h3>
              <p className="text-muted-foreground">
                Earn certificates that demonstrate your expertise and boost your professional profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Start Learning?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of students already learning on Learning Hub. Start your free trial today.
        </p>
        <Link
          href="/signup"
          className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 inline-flex items-center gap-2"
        >
          Get Started for Free <ArrowRight size={20} />
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          <p>&copy; 2024 Learning Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
