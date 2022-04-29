
import { ToastContainer } from 'react-toastify'
import '../styles/index.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <ToastContainer
        autoClose={3000}
        theme="colored"
        className="toastify"
        hideProgressBar
        pauseOnFocusLoss={false}
      />

    </>
  )
}
