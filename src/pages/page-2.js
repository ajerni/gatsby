import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useIdentityContext } from "react-netlify-identity-widget"

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

  const identity = useIdentityContext()

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
          <p
            style={{
              color: "red",
              padding: 20,
              borderStyle: "solid",
              borderWidth: 2,
              borderColor: "green",
            }}
          >
            This is only readable when you are logged in
          </p>
          <p style={{color: "blue"}}>Lambda function at: https://gatsby.andierni.ch/.netlify/functions/hello-world?name=Andi</p>

          {
          identity &&
          identity.user &&
          identity.user.app_metadata &&
          identity.user.app_metadata.roles && 
          identity.user.app_metadata.roles.includes("cool") ? (
            <p
              style={{
                color: "blue",
                padding: 20,
                borderStyle: "solid",
                borderWidth: 4,
                borderColor: "red",
              }}
            >
              This is only readable when you have the role "cool" assigned by the administrator!
            </p>
          ) : null}
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
      <AniLink cover to="/" bg="#3fd0d4" style={{marginTop:20}}>Go back to homepage</AniLink>
      <div style={{ marginBottom: 20 }}></div>
    </Layout>
  )
}

export default SecondPage
