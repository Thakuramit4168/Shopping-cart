import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'
import { PRODUCTS } from '../constants/products'
import type { ProductId } from '../types/product'

export default function ProductList() {
  const dispatch = useDispatch()

  const handleAddToCart = (productId: ProductId) => {
    dispatch(addItem(productId))
  }

  const formatPrice = (price: number): string => {
    return `£${price.toFixed(2)}`
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-3 sm:p-5 border border-slate-100">
      <h2 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4">Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center p-3 sm:p-4 border-2 border-slate-200 rounded-xl hover:border-indigo-300 hover:shadow-md bg-gradient-to-b from-white to-slate-50 transition-all"
          >
            <h3 className="text-sm sm:text-base font-semibold text-slate-800 mb-1 sm:mb-1.5 text-center">
              {product.name}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-indigo-600 mb-2 sm:mb-3">{formatPrice(product.price)}</p>
            <button
              onClick={() => handleAddToCart(product.id)}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-xs sm:text-sm font-medium rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full"
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

