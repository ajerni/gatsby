import React from "react"
import { Link } from "gatsby"
import { Button } from "react-bootstrap"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {

    let clickHandler = () => {
      console.log(console.log("click works"))
    };
  
 return( 
  <Layout>
    <SEO title="Home" />
    <h1>Test Andi</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    
      <Image />
      
      <img
        src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
        alt="Group of pandas eating bamboo"
      />
    
    </div>
    <Button onClick={clickHandler} style={{margin: 20}} variant="success">nice react bootsrap button</Button>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)}

export default IndexPage
