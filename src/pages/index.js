import React, {useState} from "react"
import { Link } from "gatsby"
import { Button } from "react-bootstrap"

import Layout from "../components/layout"
import Image from "../components/image"
import coin from "../images/coin.png"
import SEO from "../components/seo"

const IndexPage = () => {
  
  const [toggle, setToggle] = useState(true);
  
 return( 
  <Layout>
    <SEO title="Home" />
    <h1>Test Andi</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    {toggle ?
      <Image />
      :
      <img src={coin} alt="coin"/>
    }
    </div>
    <Button onClick={() => setToggle(!toggle)} style={{margin: 20}} variant="success">nice react bootsrap button</Button>
    <Link to="/page-2/">Go to page 2</Link>
    <br></br>
    <Link to="/formpage/">Go to form</Link>
  </Layout>
)}

export default IndexPage
