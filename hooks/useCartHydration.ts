import { useCartStore } from '@/store/cartStore'

/**
 * Simple cart hook - just use Zustand directly
 * Server and client state are now in sync
 */
export function useCart() {
  // Get all the state and actions from Zustand
  const items = useCartStore((state) => state.items)
  const itemCount = useCartStore((state) => state.itemCount)
  const isEmpty = useCartStore((state) => state.isEmpty)
  const addItem = useCartStore((state) => state.addItem)
  const removeItem = useCartStore((state) => state.removeItem)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const clearCart = useCartStore((state) => state.clearCart)
  const getCartSummary = useCartStore((state) => state.getCartSummary)
  const isItemInCart = useCartStore((state) => state.isItemInCart)
  const getItemById = useCartStore((state) => state.getItemById)

  return {
    // State
    items,
    itemCount,
    isEmpty,
    
    // Actions
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getCartSummary,
    isItemInCart,
    getItemById,
  }
}

// Legacy exports for backward compatibility
export const useCartSafe = useCart
export const useCartActions = useCart
export const useCartHydration = useCart
