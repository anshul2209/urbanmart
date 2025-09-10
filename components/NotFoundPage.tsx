import type { Metadata } from 'next'
import Link from 'next/link'

interface NotFoundPageProps {
  title?: string
  description?: string
  showProductsLink?: boolean
}

export default function NotFoundPage({ 
  title = "404 - Page Not Found",
  description = "Sorry, the page you're looking for doesn't exist.",
  showProductsLink = true
}: NotFoundPageProps) {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold text-slate-800 mb-4">{title}</h1>
      <p className="text-lg text-slate-600 mb-6">
        {description}
      </p>
      <div className="space-x-4">
        <Link href="/" className="btn-accent">
          Back to Home
        </Link>
        {showProductsLink && (
          <Link href="/" className="text-orange-400 hover:text-amber-700 transition-colors">
            Browse Products
          </Link>
        )}
      </div>
    </div>
  )
}
