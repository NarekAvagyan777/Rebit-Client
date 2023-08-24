import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/image/logo/Logo_color.png'
import ArrowRight from '@/assets/image/icons/arrow_right.svg'
import header from './header.module.scss'

function Header() {
  return (
    <div className={header.header}>
      <div>
        <Image src={Logo} height={38} />
      </div>
<div className={header.container}>

      <nav >
        <ul className={header.navList}>
          <li className={header.navItem}>
            <Link href="/">Work</Link>
          </li>
          <li className={header.navItem}>
            <Link href="/about">Services</Link>
          </li>
          <li className={header.navItem}>
            <Link href="/contact">Startups</Link>
          </li>
          <li className={header.navItem}>
            <Link href="/contact">About Us</Link>
          </li>
          <li className={header.navItem}>
            <Link href="/contact">Blog</Link>
          </li>
          <li className={header.navItem}>
            <Link href="/contact">Academy</Link>
          </li>
        </ul>
      </nav>
      <div>
        <button className={header.button}>
          Let’s talk
          <Image src={ArrowRight} />
        </button>
      </div>
</div>
    </div>
  )
}

export default Header
