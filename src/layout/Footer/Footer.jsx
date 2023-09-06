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
import tw from '@/assets/image/icons/tw.svg'

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
          <div style={{ display: 'flex', width: '100%',  }}>
            <div
              className={`${styles.content_wrapper__element} ${styles.links_block}`}
            >
              <p>
                <a href="">Work</a>
              </p>
              <p>
                <a href="">Services</a>
              </p>
              <p>
                <a href="">About Us</a>
              </p>
              <p>
                <a href="">Careers</a>
              </p>
            </div>

            <div
              className={`${styles.content_wrapper__element} ${styles.links_block}`}
            >
              <p>
                <a href="">Blog</a>
              </p>
              <p>
                <a href="">Academy</a>
              </p>
              <p>
                <a href="">Privacy Policy</a>
              </p>
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
                  <span>6, Tumanyan str, Yerevan, Armenia, 0001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
