import React from 'react'
import styles from '@/components/HomePageTitle/HomePageTitle.module.scss'
import TitleImg from '@/assets/image/img/title_image.svg'
import Image from 'next/image'
import Epam from '@/assets/image/logo/epam.png'
import Post from '@/assets/image/logo/HayPost.png'
import Cola from '@/assets/image/logo/coca-cola.png'

const logos = [Epam, Cola, Post, Epam, Cola, Post]

function HomePageTitle() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <h1>
            We help brands and digital products
            <span>evolve</span>
          </h1>
        </div>
        <div>
          <Image src={TitleImg} alt="title image" width={360} height={360} />
        </div>
      </div>
      <div className={styles.logo_container}>
        {logos.map((logo, index) => (
          <Image key={index} src={logo} height={36} alt="homepage title" />
        ))}
      </div>
    </div>
  )
}

export default HomePageTitle
