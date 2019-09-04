import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useQuery } from "@apollo/react-hooks"
//import { Query } from 'react-apollo'
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

  // This query is executed at run time by Apollo.
  //TODO: id: "xyz" should be selectable from text field and/or dropdown
  // Examples:
  // "id": "cjke2us3lng6v0953owd9fp15"
  // "id": "cjke2vvfdngi70953ia4b4156"
  // "id": "cjuk1n87kbmio0c15x0q0iyy0"
  // id: "cjke2xlf9nhd90953khilyzja"
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
  const { loading, error, data } = useQuery(APOLLO_QUERY); //this should happen below on press of the button 'Get Data'

  //TODO: make APOLLO_QUERY on press of button and update page (id: in the query must be provided from the client by form or dropdown or textfield etc.)
  const handleClick = () => {
      console.log("the button should trigger the useQuery(APOLLO_QUERY and update the page with the selected image")
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
      <h4 style={{ color: "red" }}>
        insert a dropdown or textfield here to selecet id: for the APOLLO_QUERY
      </h4>
      {/* <Query query={APOLLO_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <span>Loading...</span>
          if (error) return <p>{error.message}</p>

          return (
            <img
              src={data.meme.photo.url}
              alt="meme here"
              style={{ maxWidth: 300 }}
            />
          )
        }}
      </Query> */}
      {loading && <p>Loading image...</p>}
        {error && <p>Error: ${error.message}</p>}
        {data && data.meme && data.meme.photo && (
          <img
            src={data.meme.photo.url}
            alt="meme here"
            style={{ maxWidth: 300 }}
          />
        )}
      <Button onClick={handleClick} style={{margin: 20}} variant="success">Get Data</Button>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default DataPage
