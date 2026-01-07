import ProductList from './components/ProductList'
import Basket from './components/Basket'
import Summary from './components/Summary'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-2 px-2 sm:py-4 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-3 sm:mb-4">
          Shopping Cart
        </h1>
        <div className="space-y-3 sm:space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
            <div className="lg:col-span-2">
              <ProductList />
            </div>
            <div className="hidden lg:block lg:col-span-1">
              <Summary />
            </div>
          </div>
          <Basket />
          <div className="lg:hidden">
            <Summary />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
