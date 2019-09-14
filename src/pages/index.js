import React, { useState } from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import jamstackdiagonal from "../images/jamstackdiagonal.jpeg"
import { FaGlassCheers, FaExclamation } from "react-icons/fa"
import SEO from "../components/seo"
import IdentityModal, {useIdentityContext} from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"
import { Button } from "react-bootstrap"

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
          <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
            {toggle ? <div style={{minHeight: 339}}><Image /></div> : 
            <div>
              <img src={jamstackdiagonal} alt="JAMstack" onClick={() => setToggle(!toggle)}/>
            </div>}
          </div>
        </>
      }
      
      <div>
        <Button 
          onClick={() => setToggle(!toggle)}
          style={{ margin: 'auto', marginRight: 20, display: identity.user ? "none": "inline" }}
          variant="info"
        >
          toggle image
        </Button>

        <Button
          onClick={() => setShowDialog(!showDialog)}
          style={{ margin: 'auto' }}
          variant="success"
        >
          login / logout
        </Button>
      </div>

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
