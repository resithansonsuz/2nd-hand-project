import Detail from '../components/DetailPage/DetailPage'
import { ProductsProvider } from '../context/product'


function Details() {
  //The detail page of the products I wrapped with product context
  return (
    <>
      <ProductsProvider>
        <Detail />
      </ProductsProvider>
    </>
  )
}

export default Details
