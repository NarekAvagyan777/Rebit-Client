import { Header } from '@/layout'
import '@/styles/globals.css'
// import '../layout/Header/header.scss'

export default function App({ Component, pageProps }) {
  return (
  <>
    <Header />
    <Component {...pageProps} />
  </>)
}
