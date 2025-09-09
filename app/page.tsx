import type { Metadata } from 'next'
import ProductGrid from '@/components/ProductGrid'
import { fetchProducts } from '@/lib/api'
import type { Product } from '@/types/product'

export const metadata: Metadata = {
  title: 'Shop Premium Products Online',
  description:
    'Browse our extensive collection of beauty products, fragrances, furniture, and groceries. Find the perfect items for your home and lifestyle with fast shipping and great prices.',
  keywords: [
    'beauty products',
    'fragrances',
    'furniture',
    'groceries',
    'online shopping',
    'premium products',
  ],
  openGraph: {
    title: 'Shop Premium Products Online | UrbanMart',
    description:
      'Browse our extensive collection of beauty products, fragrances, furniture, and groceries. Find the perfect items for your home and lifestyle.',
    url: 'https://urbanmart.com',
  },
  alternates: {
    canonical: 'https://urbanmart.com',
  },
}

export default async function Home() {
  // Fetch initial products for SSR
  let initialProducts: Product[] = []
  let totalProducts = 0
  
  try {
    const response = await fetchProducts(12, 0) // Load first 12 products
    initialProducts = response.products
    totalProducts = response.total
  } catch (error) {
    console.error('Failed to fetch initial products:', error)
    // Continue with empty products array
  }

  return (
    <>
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Welcome to UrbanMart</h1>
        <p className="text-lg text-slate-600 mb-6">
          Discover amazing products across beauty, fragrances, furniture, and groceries. Shop with
          confidence and enjoy fast delivery to your doorstep.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Featured Products</h2>
        <ProductGrid initialProducts={initialProducts} initialTotal={totalProducts} />
      </section>
    </>
  )
}
