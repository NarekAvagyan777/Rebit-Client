import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/image/logo/Logo_color.png";
import ArrowRight from "@/assets/image/icons/arrow_right.svg";
import header from "./header.module.scss";

function Header({ route }) {

  const toContacts = () => {
    const contacts = document.getElementById("contactus");
    const rect =
      contacts.getBoundingClientRect().top +
      window.pageYOffset
    window.scrollTo({ top: rect, behavior: "smooth" });
  };

  return (
    <div className={header.header}>
      <div>
        <Link href="/">
          <Image src={Logo} height={38} />
        </Link>
      </div>
      <div className={header.container}>
        <nav>
          <ul className={header.navList}>
            <li className={header.navItem}>
              <Link
                href="/Work"
                style={route === "/Work" ? { color: "#00DA49" } : {}}
              >
                Work
              </Link>
            </li>
            <li className={header.navItem}>
              <Link
                href="/Services"
                style={route === "/Services" ? { color: "#00DA49" } : {}}
              >
                Services
              </Link>
            </li>
            <li className={header.navItem}>
              <Link
                href="/Startups"
                style={route === "/Startups" ? { color: "#00DA49" } : {}}
              >
                Startups
              </Link>
            </li>
            <li className={header.navItem}>
              <Link
                href="/aboutus"
                style={route === "/aboutus" ? { color: "#00DA49" } : {}}
              >
                About Us
              </Link>
            </li>
            <li className={header.navItem}>
              <Link
                href="/blog"
                style={route === "/blog" ? { color: "#00DA49" } : {}}
              >
                Blog
              </Link>
            </li>
            <li className={header.navItem}>
              <Link
                href="/academy"
                style={route === "/academy" ? { color: "#00DA49" } : {}}
              >
                Academy
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <button className={header.button} onClick={toContacts}>
            Let’s talk
            <Image src={ArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
