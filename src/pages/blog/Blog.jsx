import Head from 'next/head'
import Image from 'next/image'

import Cms from '@/assets/image/img/coming.png'
import styles from './blog.module.scss'

export default function index() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="about our blog" />
      </Head>
      <div className={styles.container}>
        <Image src={Cms} width={375} alt='Coming soon' />
      </div>
    </>
  )
}
