import Head from 'next/head'
import '@/styles/globals.css'
import { Header, Footer } from '@/layout'
import ContactUs from '@/components/ContactUs/ContactUs';


export default function App({ Component, pageProps }) {
  return (
  <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>)
}
