import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { CartItem, ProductId } from '../../types/product'

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductId>) => {
      const existingItem = state.items.find(
        (item) => item.productId === action.payload
      )
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ productId: action.payload, quantity: 1 })
      }
    },
    removeItem: (state, action: PayloadAction<ProductId>) => {
      const existingItem = state.items.find(
        (item) => item.productId === action.payload
      )
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1
        } else {
          state.items = state.items.filter(
            (item) => item.productId !== action.payload
          )
        }
      }
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer

