import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import AddToCartButton from '@/components/AddToCartButton'
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd'
import { ProductJsonLd } from '@/components/ProductJsonLd'
import { fetchProduct } from '@/lib/api'
import type { Product } from '@/types/product'

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  let product: Product
  try {
    product = await fetchProduct(id)
  } catch (error) {
    // If product doesn't exist, trigger Next.js 404 page
    notFound()
  }

  const mainImage = product.images?.[0] ?? product.thumbnail

  const breadcrumbItems = [
    { name: 'Home', url: 'https://urbanmart.com' },
    { name: 'Products', url: 'https://urbanmart.com' },
    { name: product.title, url: `https://urbanmart.com/products/${id}` },
  ]

  return (
    <>
      <ProductJsonLd product={product} />
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* Visual Breadcrumbs */}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-slate-600">
          <li>
            <Link href="/" className="hover:text-orange-400 transition-colors">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <span className="mx-2">/</span>
            <Link href="/" className="hover:text-orange-400 transition-colors">
              Products
            </Link>
          </li>
          <li className="flex items-center">
            <span className="mx-2">/</span>
            <span className="text-slate-800 font-medium">{product.title}</span>
          </li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-4 sm:gap-6 lg:gap-10">
        <div className="relative w-full max-w-sm mx-auto md:mx-0 md:max-w-xl lg:max-w-2xl aspect-[3/2] md:aspect-square bg-gray-50 rounded-lg overflow-hidden md:justify-self-start">
          <Image
            src={mainImage}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px"
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 md:pl-4 lg:pl-6">
          <h2 className="m-0 text-lg sm:text-xl md:text-2xl font-semibold break-words">
            {product.title}
          </h2>
          <p className="m-0 text-gray-700 text-sm md:text-base break-words leading-relaxed">
            {product.description}
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <strong className="text-base md:text-lg">${product.price.toFixed(2)}</strong>
            <span className="text-green-500 text-sm md:text-base">
              -{product.discountPercentage}%
            </span>
            <span className="text-gray-500 text-sm md:text-base">⭐ {product.rating}</span>
          </div>
          <div className="mt-1">
            <div className="w-full sm:w-auto">
              <AddToCartButton
                id={product.id}
                title={product.title}
                price={product.price}
                thumbnail={product.thumbnail}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
