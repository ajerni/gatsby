import React, { useState } from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import coin from "../images/coin.png"
import { FaGlassCheers, FaExclamation } from "react-icons/fa"
import SEO from "../components/seo"
import IdentityModal, {useIdentityContext} from "react-netlify-identity-widget"
import "../css/loginmodal.module.css" //leaves react-bootsrap styling ok but does not style the IdentytyModal properly
//import "react-netlify-identity-widget/styles.css" // overwrites the styling of react-bootsrap Button
import { Button } from "react-bootstrap" //the styling is not applied when importing react-netlify-identity-widget/styles.css dirctly

const IndexPage = () => {
  const [toggle, setToggle] = useState(true)
  const [showDialog, setShowDialog] = useState(false)

  const identity = useIdentityContext()

  return (
    <Layout>
      <SEO title="Home" />
      <h2>Andi's Gatsby and GraphQL learning project</h2>
      <p>
        react-icons are cool:
        <FaGlassCheers
          size={48}
          style={{ color: "red", marginLeft: 15 }}
          onClick={() => alert("Cool Icons:\nhttps://react-icons.netlify.com")}
        />
        <FaExclamation />
      </p>

      {identity && identity.user ? (
        <pre>{JSON.stringify(identity, null, 2)}</pre>
      ) : 
        <>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            {toggle ? <Image /> : <img src={coin} alt="coin" />}
          </div>
        </>
      }

      <Button 
        onClick={() => setToggle(!toggle)}
        style={{ margin: 20, display: identity.user ? "none": "inline" }}
        variant="info"
      >
        toggle image
      </Button>
      <Button
        onClick={() => setShowDialog(!showDialog)}
        style={{ margin: 20 }}
        variant="success"
      >
        login / logout
      </Button>

      <IdentityModal
        showDialog={showDialog}
        onCloseDialog={() => {
          setShowDialog(false)
          navigate("page-2")
        }}
      />
    </Layout>
  )
}

export default IndexPage
