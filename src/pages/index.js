import React, {useState} from "react"
import { Button } from "react-bootstrap"

import Layout from "../components/layout"
import Image from "../components/image"
import coin from "../images/coin.png"
import { FaGlassCheers, FaExclamation } from "react-icons/fa";
import SEO from "../components/seo"

const IndexPage = () => {
  
  const [toggle, setToggle] = useState(true);
  
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
    <Button onClick={() => setToggle(!toggle)} style={{margin: 20}} variant="success">nice react bootsrap button</Button>
    
  </Layout>
)}

export default IndexPage
