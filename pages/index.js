import HomePage from '../components/HomePage/HomePage'
import { ProductsContext, ProductsProvider } from '../context/product'


function Home() {
  return (
    <>
    <ProductsProvider>
      <HomePage/>
      </ProductsProvider>
    </>
  )
}

export default Home
