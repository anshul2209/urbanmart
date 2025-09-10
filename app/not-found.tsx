import type { Metadata } from 'next'
import NotFoundPage from '@/components/NotFoundPage'

export const metadata: Metadata = {
  title: 'Page Not Found | UrbanMart',
  description: "The page you're looking for doesn't exist. Browse our amazing products instead.",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <NotFoundPage 
      title="404 - Page Not Found"
      description="Sorry, the page you're looking for doesn't exist."
    />
  )
}
