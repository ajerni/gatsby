import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useLazyQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DataPage = () => {

  // This query is executed at build time by Gatsby. (and refetched by refetchInterval in gatsby.config.js - only during develop :-(
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
  query MyQuery ($id: ID!){
  # fruitapi {
    fruits(where: {id: $id}) {
      image {
        url(transformation: {image: {resize: {height: 300, width: 300}}})
      }
    # }
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
        <option value="ck05e3a8v5w0o0b04z6msmoo7">Apfel</option>
        <option value="ck05e3jgi5vgc0b204x532hlu">Birne</option>
        <option value="ck0f7vtl638dw0b20qs6bgmp6">Banane</option>
        <option value="ck0f8dm403aul0b20a4s7bupf">Rüebli</option>
      </select>

      {loading && <p style={{margin: "auto", marginTop:20}}>Loading image...</p>}
      {error && <p>Error: ${error.message}</p>}
      {data && data.fruits && data.fruits.image && data.fruits.image.url &&(
        <img
          src={data.fruits.image.url}
          alt="meme here"
          style={{ maxWidth: 300, margin: "auto", marginTop:20, marginBottom:20}}
        />
      )}
      <Button onClick={() => getPhoto({ variables: { id: selectedId } })} style={{ margin: 'auto'}} variant="success">
        Get Data
      </Button>
      <Link to="/" style={{marginTop: 20, marginBottom: 20}}>Go back to homepage</Link>
    </Layout>
  )
}

export default DataPage
