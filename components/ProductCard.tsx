import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/types/product'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="card block no-underline text-inherit hover:shadow-lg transition-all p-4"
    >
      <div className="relative w-full aspect-[4/3] md:aspect-square overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <strong className="text-base font-semibold text-slate-800 line-clamp-1">
          {product.title}
        </strong>
        <span className="text-lg font-bold text-orange-400">${product.price.toFixed(2)}</span>
        <span className="text-xs md:text-sm text-slate-600">⭐ {product.rating}</span>
      </div>
    </Link>
  )
}
