import React, { useState } from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import jamstackdiagonal from "../images/jamstackdiagonal.png"
import { FaGlassCheers, FaExclamation } from "react-icons/fa"
import SEO from "../components/seo"
import { Button } from "react-bootstrap"
import { useIdentityContext } from "react-netlify-identity-widget"

const IndexPage = () => {
  const [toggle, setToggle] = useState(true)
  const [showDialog, setShowDialog] = useState(false)

  const identity = useIdentityContext()

  return (
    <Layout>

      <SEO title="Home" />
      <h2>Andi's Gatsby and GraphQL learning project</h2>
      <p style={{ margin: "auto", marginTop: -3 }}>
        react-icons are cool:
        <FaGlassCheers
          size={48}
          style={{ color: "red", marginLeft: 15 }}
          onClick={() => alert("Cool Icons:\nhttps://react-icons.netlify.com")}
        />
        <FaExclamation />
      </p>

      <div>
        {identity && identity.user ? (
          <pre>{JSON.stringify(identity, null, 2)}</pre>
        ) : (
          <>
            <div style={{ margin: "auto" }}>
              {toggle ? (
                <div>
                  <Image />
                </div>
              ) : (
                <div style={{ textAlign: "center", maxHeight: 460 }}>
                  <img
                    src={jamstackdiagonal}
                    alt="JAMstack"
                    onClick={() => setToggle(!toggle)}
                  />
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <div style={{ margin: "auto" }}>
        <Button
          onClick={() => setToggle(!toggle)}
          style={{
            margin: "auto",
            marginRight: 20,
            display: identity.user ? "none" : "inline",
          }}
          variant="info"
        >
          toggle image
        </Button>

        <Button
          onClick={() => {navigate("loginpage"); setShowDialog(!showDialog)}}
          style={{ margin: "auto" }}
          variant="success"
        >
          login / logout
        </Button>
      </div>

    </Layout>
  )
}

export default IndexPage
