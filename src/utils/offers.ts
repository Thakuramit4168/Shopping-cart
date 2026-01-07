import type { CartItem, CartItemWithDetails, CartSummary, ProductId } from '../types/product'
import { PRODUCTS } from '../constants/products'

export function calculateItemPrice(
  productId: ProductId,
  quantity: number,
  allCartItems: CartItem[]
): { itemPrice: number; savings: number; finalPrice: number } {
  const product = PRODUCTS.find((p) => p.id === productId)
  if (!product) {
    return { itemPrice: 0, savings: 0, finalPrice: 0 }
  }

  const basePrice = product.price * quantity
  let savings = 0
  let finalPrice = basePrice

  if (productId === 'cheese') {
    const freeItems = Math.floor(quantity / 2)
    savings = freeItems * product.price
    finalPrice = basePrice - savings
  } else if (productId === 'butter') {
    const discount = basePrice / 3
    savings = discount
    finalPrice = basePrice - savings
  } else if (productId === 'bread') {
    const soupItem = allCartItems.find((item) => item.productId === 'soup')
    if (soupItem && soupItem.quantity > 0) {
      const eligibleBread = Math.min(quantity, soupItem.quantity)
      const discountPerBread = product.price / 2
      savings = eligibleBread * discountPerBread
      finalPrice = basePrice - savings
    }
  }

  return { itemPrice: basePrice, savings, finalPrice }
}

export function calculateCartDetails(
  cartItems: CartItem[]
): { items: CartItemWithDetails[]; summary: CartSummary } {
  const itemsWithDetails: CartItemWithDetails[] = cartItems.map((item) => {
    const product = PRODUCTS.find((p) => p.id === item.productId)!
    const { itemPrice, savings, finalPrice } = calculateItemPrice(
      item.productId,
      item.quantity,
      cartItems
    )

    return {
      ...item,
      product,
      itemPrice,
      savings,
      finalPrice,
    }
  })

  const subtotal = itemsWithDetails.reduce((sum, item) => sum + item.itemPrice, 0)
  const totalSavings = itemsWithDetails.reduce((sum, item) => sum + item.savings, 0)
  const total = subtotal - totalSavings

  const summary: CartSummary = {
    subtotal,
    totalSavings,
    total,
  }

  return { items: itemsWithDetails, summary }
}

