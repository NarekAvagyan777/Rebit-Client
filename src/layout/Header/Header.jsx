import Logo from '@/assets/image/logo/Logo_color.png'
import ArrowRight from '@/assets/image/icons/arrow_right.svg'
import Image from 'next/image'
import header from './header.module.scss'

function Header() {
  return (
    <div className={header.header}>
      <div>
        <Image src={Logo} height={38}  />
      </div>
      <div>
        <button className={header.button}>
          Let’s talk
          <Image src={ArrowRight} />
        </button>
      </div>
    </div>
  )
}

export default Header
