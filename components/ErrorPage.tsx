'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { getErrorCode, getErrorMessage, logError } from '@/lib/errors'

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset?: () => void
  title?: string
  description?: string
  showDetails?: boolean
}

export default function ErrorPage({ 
  error, 
  reset, 
  title = "Something went wrong",
  description = "We're sorry, but something unexpected happened.",
  showDetails = true
}: ErrorPageProps) {
  useEffect(() => {
    if (error) {
      logError(error, {
        component: 'ErrorPage',
        digest: error.digest,
      })
    }
  }, [error])

  const errorCode = getErrorCode(error)
  const errorMessage = getErrorMessage(error)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full mx-auto p-6">
        <div className="text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-600 mb-6">
            {errorCode === 'NOT_FOUND'
              ? "The page you're looking for doesn't exist."
              : description}
          </p>

          {showDetails && process.env.NODE_ENV === 'development' && error && (
            <details className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
              <summary className="cursor-pointer font-medium text-red-800 mb-2">
                Error Details (Development)
              </summary>
              <pre className="text-xs text-red-700 whitespace-pre-wrap">
                {errorMessage}
                {error.stack && `\n\nStack trace:\n${error.stack}`}
              </pre>
            </details>
          )}

          <div className="space-y-3">
            {reset && (
              <button
                type="button"
                onClick={reset}
                className="w-full bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition-colors font-medium"
              >
                Try Again
              </button>
            )}
            <Link
              href="/"
              className="block w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
