import type { Metadata } from 'next'
import { fetchProduct } from '@/lib/api'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = await fetchProduct(params.id)
  if (!product) {
    return {
      title: 'Product Not Found | UrbanMart',
      description: 'This product does not exist.',
      robots: { index: false, follow: false },
    }
  }

  const price = product.price.toFixed(2)
  const discount = product.discountPercentage.toFixed(0)
  const rating = product.rating.toFixed(1)

  return {
    title: `${product.title} - $${price} | UrbanMart`,
    description: `${product.description} Buy ${product.title} for $${price} with ${discount}% discount. ⭐ ${rating} rating. Fast shipping available.`,
    keywords: [
      product.title,
      product.brand,
      product.category,
      `$${price}`,
      `${discount}% off`,
      'online shopping',
      'buy online',
      product.tags?.join(', ') || '',
    ].filter(Boolean),
    openGraph: {
      title: `${product.title} - $${price} | UrbanMart`,
      description: `${product.description} Buy now for $${price} with ${discount}% discount.`,
      images: [
        {
          url: product.thumbnail,
          width: 800,
          height: 600,
          alt: product.title,
        },
        ...(product.images?.slice(0, 3).map((img) => ({
          url: img,
          width: 800,
          height: 600,
          alt: product.title,
        })) || []),
      ],
      url: `https://urbanmart.com/products/${params.id}`,
      type: 'website',
      siteName: 'UrbanMart',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.title} - $${price}`,
      description: `${product.description} Buy now for $${price} with ${discount}% discount.`,
      images: [product.thumbnail],
    },
    alternates: {
      canonical: `https://urbanmart.com/products/${params.id}`,
    },
    other: {
      'product:price:amount': price,
      'product:price:currency': 'USD',
      'product:availability': product.stock > 0 ? 'in stock' : 'out of stock',
      'product:condition': 'new',
      'product:brand': product.brand,
      'product:category': product.category,
    },
  }
}
