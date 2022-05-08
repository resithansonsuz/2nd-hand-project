import HomePage from '../components/HomePage/HomePage'
import { AuthProvider } from '../context/auth'
import { ProductsProvider } from '../context/product'

function Home() {
  return (
    //The main page I wrapped with Product and Auth context
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
