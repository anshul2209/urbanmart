import { create } from 'zustand'
import { persist, subscribeWithSelector } from 'zustand/middleware'

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
  isHydrated: boolean

  // Actions
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  setHydrated: (hydrated: boolean) => void

  // Selectors
  getTotalItems: () => number
  getTotalPrice: () => number
  getCartSummary: () => CartSummary
  getItemById: (id: number) => CartItem | undefined
  isItemInCart: (id: number) => boolean

  // Computed values
  isEmpty: boolean
  itemCount: number
}

// Server snapshot for SSR - cached to avoid infinite loops
let serverSnapshot: CartState | null = null

const getServerSnapshot = (): CartState => {
  if (!serverSnapshot) {
    serverSnapshot = {
      items: [],
      isHydrated: false,
      addItem: () => {},
      removeItem: () => {},
      updateQuantity: () => {},
      clearCart: () => {},
      setHydrated: () => {},
      getTotalItems: () => 0,
      getTotalPrice: () => 0,
      getCartSummary: () => ({
        totalItems: 0,
        totalPrice: 0,
        totalDiscount: 0,
        subtotal: 0,
      }),
      getItemById: () => undefined,
      isItemInCart: () => false,
      isEmpty: true,
      itemCount: 0,
    }
  }
  return serverSnapshot
}

export const useCartStore = create<CartState>()(
  subscribeWithSelector(
    persist(
      (set, get) => ({
        items: [],
        isHydrated: false,

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

        setHydrated: (hydrated: boolean) => {
          set({ isHydrated: hydrated })
        },

        getTotalItems: () => {
          return get().items.reduce((sum, item) => sum + item.quantity, 0)
        },

        getTotalPrice: () => {
          return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0)
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

        getItemById: (id: number) => {
          return get().items.find((item) => item.id === id)
        },

        isItemInCart: (id: number) => {
          return get().items.some((item) => item.id === id)
        },

        isEmpty: true,

        itemCount: 0,
      }),
      {
        name: 'urbanmart-cart',
        partialize: (state) => ({
          items: state.items,
          isHydrated: false, // Always start as not hydrated
        }),
        onRehydrateStorage: () => (state) => {
          if (state) {
            const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)
            const isEmpty = state.items.length === 0
            state.setHydrated(true)
            state.itemCount = itemCount
            state.isEmpty = isEmpty
          }
        },
      }
    )
  )
)

// Export server snapshot for SSR
export { getServerSnapshot }
