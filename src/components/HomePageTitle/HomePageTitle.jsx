import React from 'react'
import styles from '@/components/HomePageTitle/HomePageTitle.module.scss'
import TitleImg from '@/assets/image/img/title_image.svg'
import Image from 'next/image'
import ArrowRight from '@/assets/image/icons/arrow_right.svg'
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
        <div className={styles.title_image}>
          <Image src={TitleImg} alt="title image" width={360} height={360} />
        </div>

        <div>
          <button className={styles.button} >
            Let’s talk
            <Image src={ArrowRight} alt="arrow right" />
          </button>
        </div>
      </div>
      <div className={styles.logo_container}>
      <div className={styles.logo_wrapper}>
        {logos.map((logo, index) => (
          <Image key={index} src={logo} height={36} alt="homepage title" />
        ))}
        </div>
      </div>
    </div>
  )
}

export default HomePageTitle
