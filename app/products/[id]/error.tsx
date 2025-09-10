'use client'

import ErrorPage from '@/components/ErrorPage'

export default function ProductError({ error }: { error: unknown }) {
  return (
    <ErrorPage 
      error={error as Error} 
      title="Failed to load product"
      description="We couldn't load the product details. Please try again."
      showDetails={false}
    />
  )
}
