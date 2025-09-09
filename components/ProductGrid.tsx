'use client'

import { useEffect } from 'react'
import ProductCard from './ProductCard'
import { useInfiniteProducts } from '@/hooks/useInfiniteProducts'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import type { Product } from '@/types/product'

interface ProductGridProps {
  initialProducts?: Product[]
  initialTotal?: number
}

export default function ProductGrid({ initialProducts = [], initialTotal = 0 }: ProductGridProps) {
  const { products, loading, error, hasMore, loadMore } = useInfiniteProducts({
    initialProducts,
    initialTotal
  })
  const { ref, isIntersecting } = useIntersectionObserver()

  // Load more products when intersection observer triggers
  useEffect(() => {
    if (isIntersecting && hasMore && !loading) {
      loadMore()
    }
  }, [isIntersecting, hasMore, loading, loadMore])

  // Direct intersection observer setup as backup
  useEffect(() => {
    const element = ref.current
    if (!element || !hasMore || loading) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore && !loading) {
          loadMore()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '200px'
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [hasMore, loading, loadMore])

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600 mb-4">Failed to load products</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Loading indicator */}
      {loading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-slate-600">Loading more products...</p>
        </div>
      )}

      {/* Intersection observer target */}
      {hasMore && !loading && (
        <div 
          ref={ref} 
          className="h-4 mt-8" 
          style={{ minHeight: '16px' }}
        />
      )}

      {/* End of products message */}
      {!hasMore && products.length > 0 && (
        <div className="text-center py-8">
          <p className="text-slate-600">You've reached the end of our product catalog!</p>
        </div>
      )}
    </>
  )
}
