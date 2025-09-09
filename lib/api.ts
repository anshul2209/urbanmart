import type { Product } from '@/types/product'

const API_BASE = 'https://dummyjson.com' as const

// API Response types for better type safety
interface ApiResponse<T> {
  data: T
  success: boolean
  error?: string
}

interface ProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

// Custom error class for API errors
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public statusText: string
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

// Generic API client with proper error handling
async function apiClient<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
  const defaultHeaders = {
    'User-Agent': 'UrbanMart-SSR/1.0',
    'Content-Type': 'application/json',
  }

  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    })

    if (!response.ok) {
      throw new ApiError(
        `API request failed: ${response.statusText}`,
        response.status,
        response.statusText
      )
    }

    const data = await response.json()
    return {
      data,
      success: true,
    }
  } catch (error) {
    if (error instanceof ApiError) {
      throw error
    }

    // Network or other errors
    throw new ApiError(
      `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      0,
      'Network Error'
    )
  }
}

export async function fetchProducts(
  limit: number = 24,
  revalidate: number = 60
): Promise<Product[]> {
  try {
    const response = await apiClient<ProductsResponse>(`/products?limit=${limit}`, {
      next: { revalidate },
    })

    return response.data.products
  } catch (error) {
    console.error('Error fetching products:', error)
    // Return empty array as fallback for SSR
    return []
  }
}

export async function fetchProduct(id: string, revalidate: number = 300): Promise<Product> {
  const response = await apiClient<Product>(`/products/${id}`, {
    next: { revalidate },
  })

  return response.data
}

// Search products with better error handling
export async function searchProducts(
  query: string,
  limit: number = 24,
  revalidate: number = 60
): Promise<Product[]> {
  try {
    const response = await apiClient<ProductsResponse>(
      `/products/search?q=${encodeURIComponent(query)}&limit=${limit}`,
      { next: { revalidate } }
    )

    return response.data.products
  } catch (error) {
    console.error('Error searching products:', error)
    return []
  }
}

// Get products by category
export async function fetchProductsByCategory(
  category: string,
  limit: number = 24,
  revalidate: number = 60
): Promise<Product[]> {
  try {
    const response = await apiClient<ProductsResponse>(
      `/products/category/${encodeURIComponent(category)}?limit=${limit}`,
      { next: { revalidate } }
    )

    return response.data.products
  } catch (error) {
    console.error(`Error fetching products for category ${category}:`, error)
    return []
  }
}
