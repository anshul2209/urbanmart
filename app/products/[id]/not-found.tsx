import type { Metadata } from 'next'
import NotFoundPage from '@/components/NotFoundPage'

export const metadata: Metadata = {
  title: 'Product Not Found | UrbanMart',
  description: "The product you're looking for doesn't exist. Browse our other amazing products.",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <NotFoundPage 
      title="Product Not Found"
      description="Sorry, the product you're looking for doesn't exist or has been removed."
    />
  )
}
