import { useEffect, useCallback } from 'react'
import { fetchProducts } from '@/lib/api'
import { useProductsStore } from '@/store/productsStore'
import type { Product } from '@/types/product'

interface UseInfiniteProductsProps {
  initialProducts?: Product[]
  initialTotal?: number
}

interface UseInfiniteProductsReturn {
  products: Product[]
  loading: boolean
  error: string | null
  hasMore: boolean
  loadMore: () => void
}

const PRODUCTS_PER_PAGE = 12

export function useInfiniteProducts({ 
  initialProducts = [], 
  initialTotal = 0 
}: UseInfiniteProductsProps = {}): UseInfiniteProductsReturn {
  const {
    products,
    total,
    currentPage,
    hasMore,
    loading,
    error,
    setProducts,
    addProducts,
    setTotal,
    setCurrentPage,
    setHasMore,
    setLoading,
    setError
  } = useProductsStore()

  const loadProducts = useCallback(async (page: number, append = false) => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetchProducts(PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE)
      
      setTotal(response.total)
      
      const totalLoaded = (page + 1) * PRODUCTS_PER_PAGE
      const hasMoreProducts = totalLoaded < response.total
      
      if (append) {
        addProducts(response.products)
      } else {
        setProducts(response.products)
      }
      
      setHasMore(hasMoreProducts)
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load products')
    } finally {
      setLoading(false)
    }
  }, [setLoading, setError, setTotal, addProducts, setProducts, setHasMore])

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      const nextPage = currentPage + 1
      setCurrentPage(nextPage)
      loadProducts(nextPage, true)
    }
  }, [loading, hasMore, currentPage, setCurrentPage, loadProducts])

  // Initialize with SSR data if store is empty
  useEffect(() => {
    if (products.length === 0 && initialProducts.length > 0) {
      setProducts(initialProducts)
      setTotal(initialTotal)
      setCurrentPage(0)
      setHasMore(initialProducts.length < initialTotal)
    }
  }, [initialProducts, initialTotal, products.length, setProducts, setTotal, setCurrentPage, setHasMore])

  return {
    products,
    loading,
    error,
    hasMore,
    loadMore,
  }
}
