'use client'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/image/logo/Logo_color.png'
import ArrowRight from '@/assets/image/icons/arrow_right.svg'
import Menu from '@/assets/image/icons/burger.svg'
import header from './header.module.scss'
import { useEffect, useState } from 'react'

const useScrollSticky = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      const scrollY = window.scrollY
      // You can adjust the threshold value (e.g., 100) to change when the class is added
      setIsSticky(scrollY > 80)
    }

    // Check if window is defined before adding the scroll event listener
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)

      // Remove the scroll event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return isSticky
}

function Header({ route }) {
  const [menuOpen, setMenuOpen] = useState(false)

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia('(max-width: 768px)')

  //   // Handle media query changes
  //   const handleMediaQuery = (event) => {
  //     if (event.matches) {
  //       // When the screen is below 768px, hide the navigation list
  //       setMenuOpen(false)
  //     }
  //   }

  //   mediaQuery.addEventListener('change', handleMediaQuery)
  //   handleMediaQuery(mediaQuery) // Initial check

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     mediaQuery.removeEventListener('change', handleMediaQuery)
  //   }
  // }, [])
  const handleOpen = () => {
    setMenuOpen((prev) => !prev)
  }
  const toContacts = () => {
    const contacts = document.getElementById('contactus')
    const rect = contacts.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({ top: rect, behavior: 'smooth' })
  }
  const isSticky = useScrollSticky()
  const headerClasses = `${header.header} ${isSticky ? header.sticky : ''}`
  return (
    <div className={headerClasses} id="header">
      <div>
        <Link href="/">
          <Image src={Logo} height={38} alt="logo" />
        </Link>
      </div>
      <div className={header.container}>
        <nav>
          {/* <div class={header.menu_icon} id="menu-icon">
            <Image src={Menu} />
          </div> */}
          {/* <ul className={`${header.navList} ${menuOpen ? header.showNav : ''}`}>
            
          </ul> */}
          <ul className={header.navList}>
            <li className={header.navItem}>
              <Link
                href="/Work"
                style={route === '/Work' ? { color: '#00DA49' } : {}}
              >
                Work
              </Link>
            </li>
            <li className={header.navItem}>
              <Link
                href="/Services"
                style={route === '/Services' ? { color: '#00DA49' } : {}}
              >
                Services
              </Link>
            </li>
            <li className={header.navItem}>
              <Link
                href="/Startups"
                style={route === '/Startups' ? { color: '#00DA49' } : {}}
              >
                Startups
              </Link>
            </li>
            <li className={header.navItem}>
              <Link
                href="/aboutus"
                style={route === '/aboutus' ? { color: '#00DA49' } : {}}
              >
                About Us
              </Link>
            </li>
            <li className={header.navItem}>
              <Link
                href="/blog"
                style={route === '/blog' ? { color: '#00DA49' } : {}}
              >
                Blog
              </Link>
            </li>
            <li className={header.navItem}>
              <Link
                href="/academy"
                style={route === '/academy' ? { color: '#00DA49' } : {}}
              >
                Academy
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <button className={header.button} onClick={toContacts}>
            Let’s talk
            <Image src={ArrowRight} alt="arrow right" />
          </button>
        </div>
        <div className={`${header.icon_menu} ${menuOpen ? header.rotated_menu : ''}`} onClick={handleOpen}>
          <Image src={Menu} />
        </div>
        <nav className={`${header.resp_nav} ${menuOpen ? header.opened : ''}`}>
          <ul className={header.dropDown}>
            <li className={header.navItem}>
              <Link
                href="/Work"
                style={route === '/Work' ? { color: '#00DA49' } : {}}
              >
                Work
              </Link>
            </li>
            <li className={header.navItem}>
              <Link
                href="/Services"
                style={route === '/Services' ? { color: '#00DA49' } : {}}
              >
                Services
              </Link>
            </li>
            <li className={header.navItem}>
              <Link
                href="/Startups"
                style={route === '/Startups' ? { color: '#00DA49' } : {}}
              >
                Startups
              </Link>
            </li>
            <li className={header.navItem}>
              <Link
                href="/aboutus"
                style={route === '/aboutus' ? { color: '#00DA49' } : {}}
              >
                About Us
              </Link>
            </li>
            <li className={header.navItem}>
              <Link
                href="/blog"
                style={route === '/blog' ? { color: '#00DA49' } : {}}
              >
                Blog
              </Link>
            </li>
            <li className={header.navItem}>
              <Link
                href="/academy"
                style={route === '/academy' ? { color: '#00DA49' } : {}}
              >
                Academy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
