import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useNetlifyIdentity } from "react-netlify-identity-widget"

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

const identity = useNetlifyIdentity(
  "https://gatsby.andierni.ch"
)

  const [myText, setMyText] = useState("I should change...")

  return (
    <Layout>
      <SEO title="Page two" />
      <h2>Second page</h2>
      <p>{data.site.siteMetadata.mydata}</p>
      <br></br>

      {identity && identity.user ? (
        <>
          <p style={{ color: "red" }}>
            Hello {identity.user.user_metadata.full_name} - You are logged in.
          </p>
          <p style={{color: "red", padding: 20, borderStyle: "solid", borderWidth: 2,borderColor: "green",}}>
            This is only readable when you are logged in
          </p>
        </>
      ) : null}
      
      <br></br>
      <h2>Two way binding:</h2>
      <h3>{myText}</h3>
      <input
        value={myText}
        onChange={event => setMyText(event.target.value)}
        type="text"
      />
      <br></br>
      <br></br>
      <Link to="/">Go back to homepage</Link>
      <div style={{ marginBottom: 20 }}></div>
    </Layout>
  )
}

export default SecondPage
