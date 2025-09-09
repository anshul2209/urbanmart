'use client'

import { useState, useTransition, useEffect } from 'react'
import { logError } from '@/lib/errors'
import { useCartStore } from '@/store/cartStore'

type Props = {
  id: number
  title: string
  price: number
  thumbnail: string
  maxQuantity?: number
  className?: string
}

type ButtonState = 'idle' | 'adding' | 'added' | 'error'

export default function AddToCartButton({
  id,
  title,
  price,
  thumbnail,
  maxQuantity,
  className = 'btn-accent',
}: Props) {
  const [state, setState] = useState<ButtonState>('idle')
  const [isPending, startTransition] = useTransition()

  const addItem = useCartStore((state) => state.addItem)
  const isItemInCart = useCartStore((state) => state.isItemInCart(id))
  const isHydrated = useCartStore((state) => state.isHydrated)
  const setHydrated = useCartStore((state) => state.setHydrated)

  // Ensure hydration happens on client side
  useEffect(() => {
    if (!isHydrated) {
      setHydrated(true)
    }
  }, [isHydrated, setHydrated])

  const handleAddToCart = async () => {
    setState('adding')

    startTransition(() => {
      try {
        addItem({
          id,
          title,
          price,
          thumbnail,
          quantity: 1,
          maxQuantity,
        })

        setState('added')

        // Reset to idle after showing success
        setTimeout(() => {
          setState('idle')
        }, 1500)
      } catch (error) {
        logError(error, { component: 'AddToCartButton', productId: id })
        setState('error')

        // Reset to idle after showing error
        setTimeout(() => {
          setState('idle')
        }, 2000)
      }
    })
  }

  const getButtonText = () => {
    switch (state) {
      case 'adding':
        return 'Adding...'
      case 'added':
        return '✓ Added!'
      case 'error':
        return 'Try Again'
      default:
        return isItemInCart ? 'In Cart' : 'Add to Cart'
    }
  }

  const getButtonStyles = () => {
    const baseStyles = className

    switch (state) {
      case 'adding':
        return `${baseStyles} disabled:opacity-60 disabled:cursor-not-allowed`
      case 'added':
        return `${baseStyles} bg-green-500 hover:bg-green-600`
      case 'error':
        return `${baseStyles} bg-red-500 hover:bg-red-600`
      default:
        return isItemInCart ? `${baseStyles} bg-gray-500 hover:bg-gray-600` : baseStyles
    }
  }

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      disabled={isPending || state === 'adding'}
      className={getButtonStyles()}
      aria-label={`Add ${title} to cart`}
    >
      {getButtonText()}
    </button>
  )
}
