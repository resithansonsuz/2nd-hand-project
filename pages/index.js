import HomePage from '../components/HomePage/HomePage'
import { AuthProvider } from '../context/auth'
import { ProductsProvider } from '../context/product'

function Home() {
  return (
    <>
      <ProductsProvider>
        <AuthProvider>
          <HomePage />
        </AuthProvider>
      </ProductsProvider>
    </>
  )
}

export default Home
