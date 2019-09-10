import React from "react"
import PropTypes from "prop-types"
import Navbar from "./navbar"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
        <div style={{ marginBottom: 10 }}></div>
        <Navbar />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer style={{marginTop: "auto"}}>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
