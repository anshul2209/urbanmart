import Script from 'next/script'
import type { Product } from '@/types/product'

export function ProductJsonLd({ product }: { product: Product }) {
  const structuredData = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: [product.thumbnail, ...(product.images || [])],
    sku: product.id.toString(),
    mpn: product.id.toString(),
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    category: product.category,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: Math.floor(Math.random() * 50) + 10, // Mock review count
      bestRating: 5,
      worstRating: 1,
    },
    offers: {
      '@type': 'Offer',
      url: `https://urbanmart.com/products/${product.id}`,
      priceCurrency: 'INR',
      price: product.price,
      priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days from now
      availability:
        product.stock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'UrbanMart',
        url: 'https://urbanmart.com',
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'INR',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          businessDays: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          },
          cutoffTime: '14:00',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 2,
            unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 3,
            unitCode: 'DAY',
          },
        },
      },
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Weight',
        value: `${product.weight || 'N/A'} gms`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Dimensions',
        value: product.dimensions
          ? `${product.dimensions.width}" x ${product.dimensions.height}" x ${product.dimensions.depth}"`
          : 'N/A',
      },
      {
        '@type': 'PropertyValue',
        name: 'Warranty',
        value: product.warrantyInformation || 'N/A',
      },
    ],
  }

  return (
    <Script
      id={`product-jsonld-${product.id}`}
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(structuredData)}
    </Script>
  )
}
