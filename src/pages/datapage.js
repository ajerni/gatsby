import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"


const DataPage = () => {

// This query is executed at build time by Gatsby. (and refetched by refetchInterval in gatsby.config.js)
  const data = useStaticQuery(graphql`
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

// This query is executed at run time by Apollo.
//TODO: id: "" should be selectable from text field or dropdown
const APOLLO_QUERY = gql`
{
  meme(where: { id: "cjke2xlf9nhd90953khilyzja" }) {
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
const { loading, error, apollodata } = useQuery(APOLLO_QUERY); //this should happen below on press of the button

//TODO: make APOLLO_QUERY on press of button and update page (id: in the query must be provided by from the client by form or dropdown or textfield etc.)
const handleClick = () => {
    console.log("the button should trigger the useQuery(APOLLO_QUERY and update the page with the selected image")
   // const{ loading, error, apollodata } = useQuery(APOLLO_QUERY);
}

  return (

    <Layout>
      <SEO title="Data page" />
      <h1>Data from own GraphQL Prisma server API</h1>
      {console.log(data)}
      <h3>useStaticQuery:</h3>
      {data.andiapi.users.map(user => <p key={user.id}>{user.name}</p>)}
      <br></br>
      <h3>useQuery (Apollo):</h3>
      <h4>insert a dropdown or textfield here to selecet id: for the APOLLO_QUERY</h4>
      {loading && <p>Loading Sara...</p>}
        {error && <p>Error: ${error.message}</p>}
        {apollodata && apollodata.meme && apollodata.meme.photo && (
          <img
            src={apollodata.meme.photo.url}
            alt="Sara Vieira"
            style={{ maxWidth: 300 }}
          />
        )}
      <Button onClick={handleClick} style={{margin: 20}} variant="success">Get Data</Button>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default DataPage
