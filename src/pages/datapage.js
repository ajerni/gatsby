import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useLazyQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DataPage = () => {

  // This query is executed at build time by Gatsby. (and refetched by refetchInterval in gatsby.config.js)
  const mydata = useStaticQuery(graphql`
    query MyQuery {
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

  // This query is executed at run time by Apollo client (onClick of button "Get Data")
  const APOLLO_QUERY = gql`
  query GetImage($id : ID){
  character(id: $id) {
    id
    name
    image
  }
}
`

  const [selectedId, setSelectedId] = useState("89")
  const [getPhoto, { loading, error, data }] = useLazyQuery(APOLLO_QUERY);
  
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
      <h2>Data from public API</h2>
      <h3>at run-time --> useQuery/useLazyQuery (Apollo Client):</h3>
      <select onChange={event => setSelectedId(event.target.value)} id="select_id">
        <option value="">Select id:</option>
        <option value="89">Bild 1</option>
        <option value="91">Bild 2</option>
        <option value="92">Bild 3</option>
        <option value="123">Bild 4</option>
      </select>

      {loading && <p>Loading image...</p>}
      {error && <p>Error: ${error.message}</p>}
      {data && data.character && data.character.image && (
        <img
          src={data.character.image}
          alt="meme here"
          style={{ maxWidth: 300 }}
        />
      )}
      <Button onClick={() => getPhoto({ variables: { id: selectedId } })} style={{ margin: 20 }} variant="success">
        Get Data
      </Button>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default DataPage
