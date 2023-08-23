import { Header, Footer } from '@/layout'
import Head from 'next/head'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>)
}
