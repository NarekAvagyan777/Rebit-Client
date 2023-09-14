'use client'
import Head from 'next/head'
import styles from '@/pages/aboutus/aboutus.module.scss'
import { useEffect, useState } from 'react'
import Img1 from '@/assets/image/img/bro.svg'
import Img2 from '@/assets/image/img/bro1.svg'
import Img3 from '@/assets/image/img/bro2.svg'
import Img4 from '@/assets/image/img/bro3.svg'
import Img5 from '@/assets/image/img/bro4.svg'
import Img6 from '@/assets/image/img/bro6.svg'
import Image from 'next/image'
import Groupfoto from '@/assets/image/img/groupfoto.svg'
import Visionfoto from '@/assets/image/img/vision.svg'
import Missionfoto from '@/assets/image/img/mission.svg'

const getLastLettersStyle = (word) => {
  if (word === 'Strategists') {
    const lastLetters = word.slice(-4)
  } else {
    const lastLetters = word.slice(-3) // Get the last 3 letters of the word
  }
  return {
    color: '#00da49', // Set your desired color here
    fontWeight: 'bold', // You can apply other styles as well
  }
}

export default function index() {
  const words = [
    'Team players',
    'Creators',
    'Strategists',
    'Designers',
    'Engineers',
    'Startupers',
  ]
  const images = [Img1, Img2, Img3, Img4, Img5, Img6]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 2000)

    return () => clearInterval(timer)
  }, [currentWordIndex, currentImageIndex, words.length, images.length])

  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="about us" />
      </Head>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1>
            We are one of the fastest-growing <span>digital consultancies</span>
            .
          </h1>
        </div>
        <div>
          <div className={styles.content}>
            <div className={styles.fotoWrapper}>
              <Image src={Groupfoto} alt="Group foto" />
            </div>
            <div>
              <div className={styles.description}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className={styles.project}>
                <div className={styles.project_info}>
                  <p>Projects done</p>
                  <p>20+</p>
                </div>
                <div className={styles.project_info}>
                  <p>Team members</p>
                  <p>15</p>
                </div>
                <div className={styles.project_info}>
                  <p>Years of experience</p>
                  <p>3</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.about}>
            <div className={styles.about_container}>
              <div className={styles.titleWrapper}>
                <p className={styles.text}>We are</p>
                <p className={styles.changing_text}>
                  <span className={styles.word}>
                    {words[currentWordIndex] !== 'Strategists'
                      ? words[currentWordIndex].slice(0, -3)
                      : words[currentWordIndex].slice(0, -4)}
                    {''}

                    <span style={getLastLettersStyle(words[currentWordIndex])}>
                      {words[currentWordIndex] !== 'Strategists'
                        ? words[currentWordIndex].slice(-3)
                        : words[currentWordIndex].slice(-4)}
                    </span>
                  </span>
                </p>
              </div>
              <div className={styles.change_image}>
                <Image src={images[currentImageIndex]} alt="Image" />
              </div>
            </div>

            <div className={styles.aboutus}>
              <div>
                <p>Our vision</p>
              </div>
              <div className={styles.mission_container}>
                <div className={styles.fotoWrapper}>
                  <Image src={Visionfoto} alt="Vision" />
                </div>
                <div id="vision">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.aboutus}>
              <div>
                <p>Our mission</p>
              </div>
              <div className={styles.mission_container}>
                <div id="mission">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>

                <div className={styles.fotoWrapper}>
                  <Image src={Missionfoto} alt="Mission" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
