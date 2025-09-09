import { Product } from "@/types/product";

const API_BASE = "https://dummyjson.com" as const;

export async function fetchProducts(limit: number = 24, revalidate: number = 60): Promise<Product[]> {
  try {
    const res = await fetch(`${API_BASE}/products?limit=${limit}`, { 
      next: { revalidate },
      headers: {
        'User-Agent': 'UrbanMart-SSR/1.0',
      },
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
    }
    
    const data = await res.json();
    return data.products as Product[];
  } catch (error) {
    console.error('Error fetching products:', error);
    // Return empty array as fallback for SSR
    return [];
  }
}

export async function fetchProduct(id: string, revalidate: number = 300): Promise<Product> {
  try {
    const res = await fetch(`${API_BASE}/products/${id}`, { 
      next: { revalidate },
      headers: {
        'User-Agent': 'UrbanMart-SSR/1.0',
      },
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch product ${id}: ${res.status} ${res.statusText}`);
    }
    
    return await res.json();
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error; // Re-throw for proper error handling in components
  }
}


