import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

//import { useQuery } from "@apollo/react-hooks"
//import gql from "graphql-tag"

//Apfel oder Birne verfügbar...
const ImageTestPage = () => {
  const myFruit = useStaticQuery(graphql`
    query queryAtGraphCMS {
      fruitapi {
        fruitses(where: { name: "Apfel" }) {
          image {
            url
          }
        }
        entries(orderBy: createdAt_DESC, first: 1) {
          text
          createdAt
        }
      }
    }
  `)

let date = new Date(myFruit.fruitapi.entries[0].createdAt)
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let showDate = date.toLocaleDateString("de-DE", options)
  

  return (
    <Layout>
      <h2>Image and Data from graphcms</h2>

      <img src={myFruit.fruitapi.fruitses[0].image.url} alt="frucht" />

      <br></br>

      <div style={{ display: "inline" }}>
        <h4 style={{ display: "inline" }}>Neuester Eintrag: </h4>
        <p style={{ display: "inline", color: "red" }}>{myFruit.fruitapi.entries[0].text.toUpperCase()}</p>
        <p style={{ display: "inline" }}> vom {showDate}</p>
      </div>

      <Link to="/" style={{ marginTop: 90 }}>
        Go back to homepage
      </Link>
      <div style={{ marginBottom: 20 }}></div>
    </Layout>
  )
}

export default ImageTestPage
