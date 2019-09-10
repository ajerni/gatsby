import React, {useState} from "react"
import {navigate} from 'gatsby'
import { Button } from "react-bootstrap"
import Layout from "../components/layout"
import Image from "../components/image"
import coin from "../images/coin.png"
import { FaGlassCheers, FaExclamation } from "react-icons/fa"
import SEO from "../components/seo"
import IdentityModal from "react-netlify-identity-widget"
//import LoginModal from "../components/loginmodal"
import "react-netlify-identity-widget/styles.css" // overwrites the styling of react-bootsrap Button

const IndexPage = () => {
  
  const [toggle, setToggle] = useState(true);
  const [showDialog, setShowDialog] = useState(false)

 return( 
  <Layout>
    <SEO title="Home" />
    <h2>Andi's Gatsby and GraphQL learning project</h2>
    <p>react-icons are cool:
      <FaGlassCheers size={48} style={{color:"red", marginLeft:15}} onClick={()=>alert("Cool Icons:\nhttps://react-icons.netlify.com")}/>
      <FaExclamation/>
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    {toggle ?
      <Image />
      :
      <img src={coin} alt="coin"/>
    }
    </div>
    <Button onClick={() => setToggle(!toggle)} style={{margin: 20}} variant="success">toggle</Button>
    <Button onClick={() => setShowDialog(!showDialog)} style={{margin: 20}} variant="success">login</Button>

    <IdentityModal showDialog={showDialog} onCloseDialog={() => {setShowDialog(false); navigate('page-2')}} />
    
  </Layout>
)}

export default IndexPage
