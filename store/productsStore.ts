import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Product } from '@/types/product'

interface ProductsState {
  products: Product[]
  total: number
  currentPage: number
  hasMore: boolean
  loading: boolean
  error: string | null
  
  // Actions
  setProducts: (products: Product[]) => void
  addProducts: (products: Product[]) => void
  setTotal: (total: number) => void
  setCurrentPage: (page: number) => void
  setHasMore: (hasMore: boolean) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  reset: () => void
}

export const useProductsStore = create<ProductsState>()(
  persist(
    (set) => ({
      products: [],
      total: 0,
      currentPage: 0,
      hasMore: true,
      loading: false,
      error: null,
      
      setProducts: (products) => set({ products }),
      addProducts: (newProducts) => set((state) => ({ 
        products: [...state.products, ...newProducts] 
      })),
      setTotal: (total) => set({ total }),
      setCurrentPage: (currentPage) => set({ currentPage }),
      setHasMore: (hasMore) => set({ hasMore }),
      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),
      reset: () => set({
        products: [],
        total: 0,
        currentPage: 0,
        hasMore: true,
        loading: false,
        error: null,
      }),
    }),
    {
      name: 'urbanmart-products',
      partialize: (state) => ({
        products: state.products,
        total: state.total,
        currentPage: state.currentPage,
        hasMore: state.hasMore,
      }),
    }
  )
)
