import React from "react"
import { Link, useStaticQuery, graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DataPage = () => {
  const data = useStaticQuery(graphql`
    query MyOwnDataInSiteMetadata {
      site {
        siteMetadata {
          mydata
        }
      }
    }
  `)
  
  return(
  <Layout>
    <SEO title="Data page" />
        <h1>Data from own GraphQL Prisma server API</h1>
        <p>{data.site.siteMetadata.mydata}</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)}

export default DataPage
