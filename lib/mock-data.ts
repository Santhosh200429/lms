export interface Course {
  id: string
  title: string
  description: string
  instructor: string
  image: string
  category: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  rating: number
  students: number
  duration: string
  lessons: Lesson[]
}

export interface Lesson {
  id: string
  title: string
  description: string
  duration: number // in minutes
  videoUrl: string
  order: number
}

export interface Assignment {
  id: string
  title: string
  description: string
  dueDate: string
  courseId: string
  submitted: boolean
  grade?: number
}

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Web Development',
    description: 'Learn the fundamentals of HTML, CSS, and JavaScript to build modern websites.',
    instructor: 'John Smith',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    category: 'Web Development',
    level: 'Beginner',
    rating: 4.8,
    students: 2543,
    duration: '8 weeks',
    lessons: [
      {
        id: 'l1',
        title: 'HTML Basics',
        description: 'Learn the structure of HTML documents',
        duration: 45,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        order: 1,
      },
      {
        id: 'l2',
        title: 'CSS Styling',
        description: 'Master CSS for beautiful web designs',
        duration: 60,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        order: 2,
      },
      {
        id: 'l3',
        title: 'JavaScript Fundamentals',
        description: 'Learn JavaScript programming basics',
        duration: 75,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        order: 3,
      },
    ],
  },
  {
    id: '2',
    title: 'Advanced React Patterns',
    description: 'Deep dive into advanced React concepts and patterns for building scalable applications.',
    instructor: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
    category: 'Web Development',
    level: 'Advanced',
    rating: 4.9,
    students: 1823,
    duration: '10 weeks',
    lessons: [
      {
        id: 'l4',
        title: 'Hooks Deep Dive',
        description: 'Understanding React hooks in depth',
        duration: 90,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        order: 1,
      },
      {
        id: 'l5',
        title: 'Context & State Management',
        description: 'Managing application state effectively',
        duration: 80,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        order: 2,
      },
    ],
  },
  {
    id: '3',
    title: 'Python for Data Science',
    description: 'Master Python programming for data analysis and visualization.',
    instructor: 'Mike Chen',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70f504de?w=500&h=300&fit=crop',
    category: 'Data Science',
    level: 'Intermediate',
    rating: 4.7,
    students: 3421,
    duration: '12 weeks',
    lessons: [
      {
        id: 'l6',
        title: 'Python Basics',
        description: 'Getting started with Python',
        duration: 60,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        order: 1,
      },
    ],
  },
  {
    id: '4',
    title: 'UI/UX Design Fundamentals',
    description: 'Learn the principles of user interface and user experience design.',
    instructor: 'Emma Wilson',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
    category: 'Design',
    level: 'Beginner',
    rating: 4.6,
    students: 1945,
    duration: '6 weeks',
    lessons: [
      {
        id: 'l7',
        title: 'Design Principles',
        description: 'Understanding core design principles',
        duration: 50,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        order: 1,
      },
    ],
  },
]

export const mockEnrolledCourses = mockCourses.slice(0, 3)

export const mockAssignments: Assignment[] = [
  {
    id: '1',
    title: 'Build Your First Website',
    description: 'Create a simple website using HTML and CSS',
    dueDate: '2024-03-15',
    courseId: '1',
    submitted: true,
    grade: 95,
  },
  {
    id: '2',
    title: 'React Component Challenge',
    description: 'Build a reusable React component',
    dueDate: '2024-03-20',
    courseId: '2',
    submitted: false,
  },
  {
    id: '3',
    title: 'Data Analysis Project',
    description: 'Analyze a dataset using Python',
    dueDate: '2024-03-25',
    courseId: '3',
    submitted: true,
    grade: 88,
  },
]

export const mockQuizzes = [
  {
    id: '1',
    title: 'HTML Basics Quiz',
    courseId: '1',
    questions: 10,
    timeLimit: 30,
    passing: 70,
  },
  {
    id: '2',
    title: 'JavaScript Fundamentals',
    courseId: '1',
    questions: 15,
    timeLimit: 45,
    passing: 75,
  },
]
