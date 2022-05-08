import Detail from '../components/DetailPage/DetailPage'
import { ProductsProvider } from '../context/product'


function Details() {
  return (
    <>
      <ProductsProvider>
        <Detail />
      </ProductsProvider>
    </>
  )
}

export default Details
