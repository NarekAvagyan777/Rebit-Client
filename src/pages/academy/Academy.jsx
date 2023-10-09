import Head from 'next/head'
import Image from 'next/image'
import Cms from '@/assets/image/img/coming.png'
import styles from './academy.module.scss'

export default function index() {
  return (
    <>
      <Head>
        <title>Academy</title>
        <meta name="description" content="about our academy" />
      </Head>
      <div className={styles.container}>
        <Image src={Cms} width={375} alt='Coming soon' />
      </div>
    </>
  )
}
