import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useLazyQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DataPage = () => {

  // This query is executed at build time by Gatsby. (and refetched by refetchInterval in gatsby.config.js - only during develop)
  const mydata = useStaticQuery(graphql`
    query MyQuery {
      andiapi {
        users (first: 3){
          name
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
      <h2>Data from GraphQL Prisma server</h2>
      {console.log(mydata)}
      <h4>at build-time --> useStaticQuery (gatsby-source-graphql / ANDIAPI):</h4>
      <div style={{lineHeight: 0, marginBottom: 20}}>
      {mydata.andiapi.users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
      </div>
      <br></br>
      <h2>Data from GraphCMS</h2>
      <h4>at run-time --> useLazyQuery (Apollo Client):</h4>
      <select onChange={event => setSelectedId(event.target.value)} id="select_id">
        <option value="">Select id:</option>
        <option value="ck05e3a8v5w0o0b04z6msmoo7">Apfel</option>
        <option value="ck05e3jgi5vgc0b204x532hlu">Birne</option>
        <option value="ck0f7vtl638dw0b20qs6bgmp6">Banane</option>
        <option value="ck0f8dm403aul0b20a4s7bupf">Rüebli</option>
      </select>

      {loading && <div className={"lds-ring"} style={{margin: "auto", marginTop:20}}><div></div><div></div><div></div><div></div></div>}
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
