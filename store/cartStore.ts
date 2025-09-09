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

              return {
                items: state.items.map((i) =>
                  i.id === item.id
                    ? {
                        ...i,
                        quantity: maxQuantity ? Math.min(newQuantity, maxQuantity) : newQuantity,
                      }
                    : i
                ),
              }
            }

            return {
              items: [...state.items, { ...item, quantity }],
            }
          })
        },

        removeItem: (id: number) => {
          set((state) => ({
            items: state.items.filter((item) => item.id !== id),
          }))
        },

        updateQuantity: (id: number, quantity: number) => {
          set((state) => {
            if (quantity <= 0) {
              return {
                items: state.items.filter((item) => item.id !== id),
              }
            }

            return {
              items: state.items.map((item) => {
                if (item.id === id) {
                  const maxQuantity = item.maxQuantity
                  return {
                    ...item,
                    quantity: maxQuantity ? Math.min(quantity, maxQuantity) : quantity,
                  }
                }
                return item
              }),
            }
          })
        },

        clearCart: () => {
          set({ items: [] })
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

        get isEmpty() {
          return get().items.length === 0
        },

        get itemCount() {
          return get().getTotalItems()
        },
      }),
      {
        name: 'urbanmart-cart',
        partialize: (state) => ({
          items: state.items,
          isHydrated: false, // Always start as not hydrated
        }),
        onRehydrateStorage: () => (state) => {
          state?.setHydrated(true)
        },
      }
    )
  )
)
