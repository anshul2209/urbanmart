import type { Product } from '@/types/product'

const API_BASE = 'https://dummyjson.com' as const

interface ProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export async function fetchProducts(
  limit: number = 24,
  revalidate: number = 60
): Promise<Product[]> {
  try {
    const response = await fetch(`${API_BASE}/products?limit=${limit}`, {
      next: { revalidate },
      headers: {
        'User-Agent': 'UrbanMart-SSR/1.0',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`)
    }

    const data: ProductsResponse = await response.json()
    return data.products
  } catch (error) {
    console.error('Error fetching products:', error)
    // Return empty array as fallback for SSR
    return []
  }
}

export async function fetchProduct(id: string, revalidate: number = 300): Promise<Product> {
  try {
    const response = await fetch(`${API_BASE}/products/${id}`, {
      next: { revalidate },
      headers: {
        'User-Agent': 'UrbanMart-SSR/1.0',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch product ${id}: ${response.status} ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error)
    throw error // Re-throw for proper error handling in components
  }
}
