import { useCallback } from 'react'
import { useCartStore } from '@/store/cartStore'

/**
 * Custom hook for cart operations with optimized selectors
 * Provides a clean API for cart-related functionality
 */
export function useCart() {
  const store = useCartStore()

  // Optimized selectors to prevent unnecessary re-renders
  const items = useCartStore((state) => state.items)
  const isHydrated = useCartStore((state) => state.isHydrated)
  const isEmpty = useCartStore((state) => state.isEmpty)
  const itemCount = useCartStore((state) => state.itemCount)

  // Memoized actions to prevent unnecessary re-renders
  const addItem = useCallback(store.addItem, [])
  const removeItem = useCallback(store.removeItem, [])
  const updateQuantity = useCallback(store.updateQuantity, [])
  const clearCart = useCallback(store.clearCart, [])

  // Computed values
  const cartSummary = useCartStore((state) => state.getCartSummary())

  // Utility functions
  const isItemInCart = useCallback((id: number) => store.isItemInCart(id), [store])
  const getItemById = useCallback((id: number) => store.getItemById(id), [store])

  return {
    // State
    items,
    isHydrated,
    isEmpty,
    itemCount,
    cartSummary,

    // Actions
    addItem,
    removeItem,
    updateQuantity,
    clearCart,

    // Utilities
    isItemInCart,
    getItemById,
  }
}

/**
 * Hook for cart summary only - useful for components that only need totals
 */
export function useCartSummary() {
  return useCartStore((state) => ({
    totalItems: state.getTotalItems(),
    totalPrice: state.getTotalPrice(),
    cartSummary: state.getCartSummary(),
  }))
}

/**
 * Hook for cart item count only - useful for header/badge components
 */
export function useCartCount() {
  return useCartStore((state) => ({
    itemCount: state.itemCount,
    isHydrated: state.isHydrated,
  }))
}
