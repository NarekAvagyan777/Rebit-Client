import Head from 'next/head'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import styles from './slider.module.scss'
import epam from '@/assets/image/icons/epam.svg'
import member from '@/assets/image/img/member.png'

export default function Slider() {
  return (
    <div className={styles.container}>
      <Head>
        {/* <link
          rel="stylesheet"
          href="https://unpkg.com/react-responsive-carousel/lib/styles/carousel.min.css"
        /> */}
      </Head>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        emulateTouch={true}
        showArrows={false}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = {
            width: '40px',
            height: '8px',
            background: '#DDDFE1',
            cursor: 'pointer',
            borderRadius: '4px',
          }
          const style = isSelected
            ? { ...defStyle, background: '#00DA49' }
            : { ...defStyle }
          return (
            <div
              style={style}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            />
          )
        }}
      >
        <div className={styles.sliderElement}>
          <div className={styles.sliderElement__text_block}>
            <p>
              Effective workflow, smooth communication, and remarkable talent
              across multiple disciplines.
            </p>

            <div>
              <span className={styles.member}>Kathryn Ross</span>
              {/* <Image width={5} height={4} src={dot} /> */}
              <div className={styles.dot}></div>
              <span className={styles.jobTitle}>CEO, Co-Founder</span>
            </div>

            <div className={styles.companyLogo_wrapper}>
              <Image src={epam} alt="epam" />
            </div>
          </div>

          <div className={styles.memberWrapper}>
            <Image src={member} alt="member" />
            <div className={styles.blured}/>
          </div>
        </div>
        <div className={styles.sliderElement}>
          <div className={styles.sliderElement__text_block}>
            <p>
              Effective workflow, smooth communication, and remarkable talent
              across multiple disciplines.
            </p>

            <div>
              <span className={styles.member}>Kathryn Ross</span>
              <div className={styles.dot}></div>
              <span className={styles.jobTitle}>CEO, Co-Founder</span>
            </div>

            <div className={styles.companyLogo_wrapper}>
              <Image src={epam} alt="epam" />
            </div>
          </div>

          <div className={styles.memberWrapper}>
            <Image src={member} alt="member" />
            <div className={styles.blured}></div>
          </div>
        </div>
        <div className={styles.sliderElement}>
          <div className={styles.sliderElement__text_block}>
            <p>
              Effective workflow, smooth communication, and remarkable talent
              across multiple disciplines.
            </p>

            <div>
              <span className={styles.member}>Kathryn Ross</span>
              {/* <Image width={5} height={4} src={dot} /> */}
              <div className={styles.dot}></div>
              <span className={styles.jobTitle}>CEO, Co-Founder</span>
            </div>

            <div className={styles.companyLogo_wrapper}>
              <Image src={epam} alt="epam" />
            </div>
          </div>

          <div className={styles.memberWrapper}>
            <Image src={member} alt="member" />
            <div className={styles.blured}></div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}
