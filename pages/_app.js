import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import MainLayout from '../layouts/main.layout'

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp