'use client'

import Image from 'next/image'
import Link from 'next/link'
import { type CartItem } from '@/store/cartStore'
import { useCart } from '@/hooks/useCartHydration'

export default function CartPage() {
  const { items, isEmpty, getCartSummary, removeItem, updateQuantity, clearCart } = useCart()


  const cartSummary = getCartSummary()

  return (
    <div className="grid gap-4">
      <h2 className="m-0 text-2xl font-semibold">Your Cart</h2>
      {isEmpty ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🛒</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Your cart is empty</h3>
          <p className="text-gray-600 mb-6">
            Looks like you haven&apos;t added any items to your cart yet.
          </p>
          <Link href="/" className="btn-accent">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <ul className="list-none p-0 m-0 grid gap-3">
            {items.map((item: CartItem) => (
              <li
                key={item.id}
                className="grid gap-3 items-center border border-gray-200 p-2 rounded-md grid-cols-[72px_1fr] sm:[grid-template-columns:72px_1fr_auto]"
              >
                <div className="relative w-[72px] h-[72px] bg-gray-50 rounded overflow-hidden justify-self-start">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    sizes="72px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <strong>{item.title}</strong>
                  <span className="text-gray-500">${item.price.toFixed(2)} each</span>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-sm font-bold"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="text-sm font-medium min-w-[2rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-sm font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 sm:justify-self-end">
                  <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm underline"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-gray-200 pt-3 gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <span>
                Items: <strong>{cartSummary.totalItems}</strong>
              </span>
              <Link
                href="/"
                className="text-orange-400 hover:text-amber-700 transition-colors text-sm"
              >
                ← Continue Shopping
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <strong>Total: ${cartSummary.totalPrice.toFixed(2)}</strong>
              <button
                type="button"
                onClick={() => clearCart()}
                className="bg-gray-900 text-white rounded-md px-3 py-2 hover:bg-gray-800 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
