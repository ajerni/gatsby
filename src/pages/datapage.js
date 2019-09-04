import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DataPage = () => {
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

  return (
    <Layout>
      <SEO title="Data page" />
      <h1>Data from own GraphQL Prisma server API</h1>
      {console.log(data)}
      {data.andiapi.users.map(user => <p>{user.name}</p>)}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default DataPage
