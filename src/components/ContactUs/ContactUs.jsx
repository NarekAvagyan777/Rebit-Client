import Image from "next/image";
import styles from "./contactus.module.scss";
import ArrowRight from "@/assets/image/icons/arrow_right.svg";
import map from "@/assets/image/img/map.png";
import mail from '@/assets/image/icons/mail.svg';
import phone from '@/assets/image/icons/phone_in_talk.svg';
import location from '@/assets/image/icons/location.svg';

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Let’s collaborate</h2>

      <div className={styles.content_wrapper}>
        <div
          className={`${styles.content_wrapper__element} ${styles.content_wrapper__form}`}
        >
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="text" />
          </div>
          <div>
            <textarea type="text" />
          </div>
          <div>
            <button className={styles.button}>
              Let’s talk
              <Image src={ArrowRight} />
            </button>
          </div>
        </div>

        <div
          className={`${styles.content_wrapper__element} ${styles.content_wrapper__contact}`}
        >
          <div>
            <Image src={map} />
          </div>
          <div className={styles.content_wrapper__contact_block}>
            <div>
              <Image src={mail} />
              <span>hello@rebit.ai</span>
            </div>
            <div>
              <Image src={phone} />
              <span>+374 77 701105</span>
            </div>
            <div>
              <Image src={location} />
              <span>6, Tumanyan str, Yerevan, Armenia, 0001</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
