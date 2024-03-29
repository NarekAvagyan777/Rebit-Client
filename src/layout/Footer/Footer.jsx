import Image from 'next/image'
import styles from './footer.module.scss'
import ContactUs from '@/components/ContactUs/ContactUs'
import linkedin from '@/assets/image/icons/linkedin.svg'
import facebook from '@/assets/image/icons/facebook.svg'
import instagram from '@/assets/image/icons/instagram.svg'
import { TwitterIcon, FacebookIcon, LinkedinIcon } from '@/components'
import mail from '@/assets/image/icons/mail.svg'
import phone from '@/assets/image/icons/phone_in_talk.svg'
import location from '@/assets/image/icons/location.svg'
import map from '@/assets/image/img/map.svg'

import tw from '@/assets/image/icons/tw.svg'
import { BLOCKED_PAGES } from 'next/dist/shared/lib/constants'

export default function Footer() {
  return (
    <>
      <ContactUs />
      <div className={styles.container}>
        <div className={styles.content_wrapper}>
          <div
            className={`${styles.content_wrapper__element} ${styles.text_part}`}
          >
            <p>
              The text and graphic content of the website belongs to Rebit.ai
              and cannot be used by other resources without our permission and
              without the link to the source.
            </p>
            <p>© Rebit.ai 2023</p>
          </div>
          <div
            className={`${styles.content_wrapper__inner} ${styles.content_wrapper__container}`}
          >
            <div style={{ display: 'flex', width: 'inherit' }}>
              <div
                className={`${styles.content_wrapper__element} ${styles.links_block}`}
              >
                <p>
                  <a href="/Work">Work</a>
                </p>
                <p>
                  <a href="/Services">Services</a>
                </p>
                <p>
                  <a href="/aboutus">About Us</a>
                </p>
                <p>
                  <a href="">Careers</a>
                </p>
              </div>

              <div
                className={`${styles.content_wrapper__element} ${styles.links_block}`}
              >
                <p>
                  <a href="/blog">Blog</a>
                </p>
                <p>
                  <a href="/academy">Academy</a>
                </p>
                <p>
                  <a href="">Privacy Policy</a>
                </p>
              </div>
            </div>
            <div
              className={`${styles.content_wrapper__element} ${styles.contact_block}`}
            >
              <div className={styles.content_wrapper__icons_block}>
                <LinkedinIcon />
                <FacebookIcon />
                <TwitterIcon />
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </div>
              <div className={styles.content_wrapper__contact_block}>
                <div style={{ display: 'block' }}>
                  <div>
                    <Image src={mail} alt="mail" />
                    <span>hello@rebit.ai</span>
                  </div>
                  <div>
                    <Image src={phone} alt="phone" />
                    <span>+374 77 701105</span>
                  </div>
                  <div>
                    <Image src={location} alt="location" />
                    <span>
                      6, Tumanyan str,
                      <br /> Yerevan, Armenia, 0001
                    </span>
                  </div>
                </div>
                <div className={styles.map_block}>
                  <Image src={map} alt="map" width={120} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
