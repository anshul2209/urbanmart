import type { Metadata } from 'next'
import ProductCard from '@/components/ProductCard'
import { fetchProducts } from '@/lib/api'

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
  const products = await fetchProducts()

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
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  )
}
