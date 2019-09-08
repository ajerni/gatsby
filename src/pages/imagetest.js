import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

//Apfel oder Birne verfügbar...
const ImageTestPage = () => {
  const myFruit = useStaticQuery(graphql`
    query queryAtGraphCMS{
      fruitapi {
        fruitses(where: { name: "Apfel" }) {
          image {
            url
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Test graphcms assets</h1>

      <img src={myFruit.fruitapi.fruitses[0].image.url} alt="frucht" />

      <br></br>
      <Link to="/">Go back to homepage</Link>
      <div style={{marginBottom:20}}></div>
    </Layout>
  )
}

export default ImageTestPage
