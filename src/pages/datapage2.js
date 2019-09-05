import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DataPage2 = () => {

  const [selectedId, setSelectedId] = useState("cjke2xlf9nhd90953khilyzja")

  function val(selection) {
    setSelectedId(selection)
    console.log(selectedId)
  }
  // This query is executed at build time by Gatsby. (and refetched by refetchInterval in gatsby.config.js)
  const mydata = useStaticQuery(graphql`
    query MyQuery2 {
      andiapi {
        users {
          id
          name
          posts {
            id
            title
            body
          }
        }
      }
    }
  `)

  // This query is executed at run time by Apollo.
  //TODO: id: "xyz" should be taken from the dropdown (probably already in state selectedID)
  const APOLLO_QUERY2 = gql`
  {
    meme(where: { id: "cjke2us3lng6v0953owd9fp15" }) {
      photo {
        url(
          transformation: {
            image: { resize: { width: 600, height: 600, fit: crop } }
          }
        )
      }
    }
  }
`

  const { loading, error, data } = useQuery(APOLLO_QUERY2) //this should happen below on press of the button 'Get Data'

  //TODO: make APOLLO_QUERY on press of button and update page (id: in the query must be provided from the client by form or dropdown or textfield etc.)
  const handleClick = () => {
    console.log(
      "the button should trigger the useQuery(APOLLO_QUERY) and update the page with the selected image"
    )
    //const { loading, error, data } = useQuery(APOLLO_QUERY);
  }

  return (
    <Layout>
      <SEO title="Data page" />
      <h2>Data from own GraphQL Prisma server API (ANDIAPI)</h2>
      {console.log(mydata)}
      <h3>at build-time --> useStaticQuery:</h3>
      {mydata.andiapi.users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
      <br></br>
      <h2>Data from public API on graphqlcms</h2>
      <h3>at run-time --> useQuery (Apollo Client):</h3>
      <select onChange={val(this)} id="select_id">
        <option value="">Select id:</option>
        <option value="cjke2us3lng6v0953owd9fp15">Bild 1</option>
        <option value="cjke2vvfdngi70953ia4b4156">Bild 2</option>
        <option value="cjuk1n87kbmio0c15x0q0iyy0">Bild 3</option>
        <option value="cjke2xlf9nhd90953khilyzja">Bild 4</option>
      </select>

      {loading && <p>Loading image...</p>}
      {error && <p>Error: ${error.message}</p>}
      {data && data.meme && data.meme.photo && (
        <img
          src={data.meme.photo.url}
          alt="meme here"
          style={{ maxWidth: 300 }}
        />
      )}
      <Button onClick={handleClick} style={{ margin: 20 }} variant="success">
        Get Data
      </Button>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default DataPage2
