'use client'

import ErrorPage from '@/components/ErrorPage'

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: ErrorPageProps) {
  return (
    <ErrorPage 
      error={error} 
      reset={reset}
      title="Something went wrong"
      description="We're sorry, but something unexpected happened."
    />
  )
}
