export type ProductId = 'bread' | 'milk' | 'cheese' | 'soup' | 'butter'

export interface Product {
  id: ProductId
  name: string
  price: number
}

export interface CartItem {
  productId: ProductId
  quantity: number
}

export interface CartItemWithDetails extends CartItem {
  product: Product
  itemPrice: number
  savings: number
  finalPrice: number
}

export interface CartSummary {
  subtotal: number
  totalSavings: number
  total: number
}

