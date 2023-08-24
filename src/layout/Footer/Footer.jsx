import Image from "next/image";
import footer from "./footer.module.scss";
import linkedin from '@/assets/image/icons/linkedin.svg'
import facebook from '@/assets/image/icons/facebook.svg'
import instagram from '@/assets/image/icons/instagram.svg'
import be from '@/assets/image/icons/be.svg'
import rocket from '@/assets/image/icons/rocket.svg'
import github from '@/assets/image/icons/github.svg'
import mail from '@/assets/image/icons/mail.svg'
import phone from '@/assets/image/icons/phone_in_talk.svg'
import location from '@/assets/image/icons/location.svg'


export default function Footer() {
  return (
    <div className={footer.container}>
      <div className={footer.content_wrapper}>
        <div className={`${footer.content_wrapper__element} ${footer.text_part}`}>
          <p>
            The text and graphic content of the website belongs to Rebit.ai and
            cannot be used by other resources without our permission and without
            the link to the source.
          </p>
          <p>© Rebit.ai 2023</p>
        </div>

        <div className={`${footer.content_wrapper__element} ${footer.links_block}`}>
          <p><a href="">Work</a></p>
          <p><a href="">Services</a></p>
          <p><a href="">About Us</a></p>
          <p><a href="">Careers</a></p>
        </div>

        <div className={`${footer.content_wrapper__element} ${footer.links_block}`}>
          <p><a href="">Blog</a></p>
          <p><a href="">Academy</a></p>
          <p><a href="">Privacy Policy</a></p>
        </div>

        <div className={`${footer.content_wrapper__element} ${footer.contact_block}`}>

          <div className={footer.content_wrapper__icons_block}>
            <Image src={linkedin} />
            <Image src={facebook} />
            <Image src={instagram} />
            <Image src={be} />
            <Image src={rocket} />
            <Image src={github} />
          </div>
          <div className={footer.content_wrapper__contact_block}>
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
