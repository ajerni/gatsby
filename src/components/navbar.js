import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import { TiDocumentText } from "react-icons/ti"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import logo from "../images/logo.svg"

const Navbar = () => {
  const [isOpen, setNav] = useState()
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navCenter}>
          <div className={styles.navHeader}>
            <img src={logo} alt="backroads logo" onClick={()=>navigate("/")} />
            <button
              type="button"
              className={styles.logoBtn}
              onClick={toggleNav}
            >
              <FaAlignRight className={styles.logoIcon} />
            </button>
          </div>

          <div onClick={()=>navigate("doku")} className={styles.logoIcon} style={{display: "inline"}}><TiDocumentText size={42} style={{display: "inline"}}/><p style={{display: "inline"}}>Docs</p></div>

          <ul
            className={
              isOpen
                ? `${styles.navLinks} ${styles.showNav}`
                : `${styles.navLinks}`
            }
          >
            {links.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path} style={{ marginTop: 8 }} activeStyle={{ textDecoration: "#3fd0d4 underline" }}>
                    {item.text}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className={styles.navSocialLinks}>
            {socialIcons.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              )
            })}
          </div>
        </div>
      </nav>
      <div
        style={{
          width: "100%",
          height: "30px",
          marginTop: -24,
          marginBottom: 18,
          padding: 0,
          backgroundColor: "#7e85fc" //"var(--primaryColor)"
        }}
      />
    </>
  )
}

export default Navbar
