import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem, clearCart } from '../features/cart/cartSlice'
import type { RootState } from '../app/store'
import { calculateCartDetails } from '../utils/offers'
import type { ProductId } from '../types/product'

export default function Basket() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)

  const { items: itemsWithDetails } = calculateCartDetails(cartItems)

  const handleAddToCart = (productId: ProductId) => {
    dispatch(addItem(productId))
  }

  const handleRemoveFromCart = (productId: ProductId) => {
    dispatch(removeItem(productId))
  }

  const formatPrice = (price: number): string => {
    return `£${price.toFixed(2)}`
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-3 sm:p-5 border border-slate-100">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h2 className="text-lg sm:text-xl font-bold text-slate-800">Basket</h2>
        {itemsWithDetails.length > 0 && (
          <button
            onClick={handleClearCart}
            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs sm:text-sm font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Reset
          </button>
        )}
      </div>
      {itemsWithDetails.length === 0 ? (
        <p className="text-slate-500 text-center py-4 sm:py-6 text-xs sm:text-sm">Your basket is empty</p>
      ) : (
        <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3 w-full">
          {itemsWithDetails.map((item) => (
            <div
              key={item.productId}
              className="flex flex-col items-center p-3 sm:p-4 border-2 border-slate-200 rounded-xl bg-gradient-to-b from-white to-slate-50 flex-1 min-w-[120px] sm:min-w-0 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-sm sm:text-base font-semibold text-slate-800 mb-2 sm:mb-2.5 text-center">
                {item.product.name}
              </h3>
              <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-2.5">
                <button
                  onClick={() => handleRemoveFromCart(item.productId)}
                  className="px-2 sm:px-3 py-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs sm:text-sm rounded-lg hover:from-red-600 hover:to-red-700 transition-all shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  -
                </button>
                <span className="text-sm sm:text-base font-semibold text-slate-700 w-7 sm:w-8 text-center bg-slate-100 rounded px-1.5 sm:px-2 py-0.5 sm:py-1">
                  {item.quantity}
                </span>
                <button
                  onClick={() => handleAddToCart(item.productId)}
                  className="px-2 sm:px-3 py-1 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-xs sm:text-sm rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  +
                </button>
              </div>
              <div className="text-xs text-slate-600 mb-1 text-center">
                {formatPrice(item.product.price)} × {item.quantity}
              </div>
              {item.savings > 0 && (
                <div className="text-xs text-green-600 font-semibold mb-1 sm:mb-1.5 bg-green-50 px-1.5 sm:px-2 py-0.5 rounded">
                  Save: {formatPrice(item.savings)}
                </div>
              )}
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                {formatPrice(item.finalPrice)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

