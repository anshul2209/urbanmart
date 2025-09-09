'use client'

import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'
import { useEffect } from 'react'

export default function Header() {
  const itemCount = useCartStore((state) => state.itemCount)
  const isHydrated = useCartStore((state) => state.isHydrated)
  const setHydrated = useCartStore((state) => state.setHydrated)

  // Ensure hydration happens on client side
  useEffect(() => {
    if (!isHydrated) {
      setHydrated(true)
    }
  }, [isHydrated, setHydrated])


  return (
    <header className="bg-slate-800 text-white shadow-lg rounded-xl mb-6 flex flex-col sm:flex-row items-center justify-between px-6 py-4">
      <Link href="/" className="no-underline">
        <h1 className="m-0 text-2xl font-bold tracking-tight text-orange-400">UrbanMart</h1>
      </Link>
      <nav className="flex items-center gap-6 mt-2 sm:mt-0">
        <Link href="/" className="hover:text-yellow-400 transition-colors font-medium">
          Home
        </Link>
        <Link
          href="/cart"
          className="hover:text-yellow-400 transition-colors font-medium flex items-center gap-1"
          aria-label={`Shopping cart with ${isHydrated ? itemCount : 0} items`}
        >
          <span role="img" aria-label="cart">
            🛒
          </span>
          Cart
          <span className="bg-orange-400 text-white rounded-full px-2 py-0.5 text-xs font-bold ml-1">
            {isHydrated ? itemCount : 0}
          </span>
        </Link>
      </nav>
    </header>
  )
}
