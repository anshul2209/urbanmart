import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface CartItem {
  id: number
  title: string
  price: number
  quantity: number
  thumbnail: string
  maxQuantity?: number // For stock management
}

export interface CartSummary {
  totalItems: number
  totalPrice: number
  totalDiscount: number
  subtotal: number
}

interface CartState {
  items: CartItem[]

  // Actions
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void

  // Selectors
  getCartSummary: () => CartSummary
  isItemInCart: (id: number) => boolean

  // Computed values
  isEmpty: boolean
  itemCount: number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id)
          const quantity = item.quantity || 1

          if (existingItem) {
            const newQuantity = existingItem.quantity + quantity
            const maxQuantity = existingItem.maxQuantity || item.maxQuantity

            const newItems = state.items.map((i) =>
              i.id === item.id
                ? {
                    ...i,
                    quantity: maxQuantity ? Math.min(newQuantity, maxQuantity) : newQuantity,
                  }
                : i
            )
            const newItemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)
            return { items: newItems, itemCount: newItemCount, isEmpty: newItems.length === 0 }
          }

          const newItems = [...state.items, { ...item, quantity }]
          const newItemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)
          return { items: newItems, itemCount: newItemCount, isEmpty: newItems.length === 0 }
        })
      },

      removeItem: (id: number) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== id)
          const newItemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)
          return { items: newItems, itemCount: newItemCount, isEmpty: newItems.length === 0 }
        })
      },

      updateQuantity: (id: number, quantity: number) => {
        set((state) => {
          if (quantity <= 0) {
            const newItems = state.items.filter((item) => item.id !== id)
            const newItemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)
            return { items: newItems, itemCount: newItemCount, isEmpty: newItems.length === 0 }
          }

          const newItems = state.items.map((item) => {
            if (item.id === id) {
              const maxQuantity = item.maxQuantity
              return {
                ...item,
                quantity: maxQuantity ? Math.min(quantity, maxQuantity) : quantity,
              }
            }
            return item
          })
          const newItemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)
          return { items: newItems, itemCount: newItemCount, isEmpty: newItems.length === 0 }
        })
      },

      clearCart: () => {
        set({ items: [], itemCount: 0, isEmpty: true })
      },

      getCartSummary: () => {
        const items = get().items
        const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
        const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

        return {
          totalItems,
          totalPrice,
          totalDiscount: 0, // No discount calculation in cart
          subtotal: totalPrice,
        }
      },

      isItemInCart: (id: number) => {
        return get().items.some((item) => item.id === id)
      },

      // Initialize computed values
      isEmpty: true,
      itemCount: 0,
    }),
    {
      name: 'urbanmart-cart',
      partialize: (state) => ({
        items: state.items,
      }),
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)
          const isEmpty = state.items.length === 0
          // Update state properties directly
          state.itemCount = itemCount
          state.isEmpty = isEmpty
        }
      },
    }
  )
)