import { useSelector } from 'react-redux'
import type { RootState } from '../app/store'
import { calculateCartDetails } from '../utils/offers'

export default function Summary() {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const { summary } = calculateCartDetails(cartItems)

  const formatPrice = (price: number): string => {
    return `£${price.toFixed(2)}`
  }

  return (
    <div className="flex flex-col justify-center p-4 sm:p-5 border-2 border-indigo-200 rounded-xl bg-gradient-to-b from-indigo-50 to-white shadow-lg h-full min-h-[200px] sm:min-h-0">
      <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4 text-center">
        Summary
      </h3>
      <div className="space-y-2 sm:space-y-3 flex-1 flex flex-col justify-center">
        <div className="flex justify-between text-sm sm:text-base">
          <span className="font-semibold text-slate-700">Sub Total:</span>
          <span className="font-semibold text-slate-800">
            {formatPrice(summary.subtotal)}
          </span>
        </div>
        {summary.totalSavings > 0 && (
          <div className="flex justify-between text-sm sm:text-base">
            <span className="font-semibold text-green-600">Savings:</span>
            <span className="font-semibold text-green-600">
              {formatPrice(summary.totalSavings)}
            </span>
          </div>
        )}
        <div className="flex justify-between text-base sm:text-lg border-t-2 border-slate-300 pt-2 sm:pt-3 mt-2">
          <span className="font-bold text-slate-800">Total:</span>
          <span className="font-bold text-lg sm:text-xl text-indigo-700">
            {formatPrice(summary.total)}
          </span>
        </div>
      </div>
    </div>
  )
}

