import React from "react"
import { Link, useStaticQuery, graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
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
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>{data.site.siteMetadata.mydata}</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)}

export default SecondPage
