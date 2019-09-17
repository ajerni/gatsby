import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <div style={{marginBottom:15}}>
          <h1 style={{ display: "inline" }}>{post.frontmatter.title}</h1>
          <h3 style={{ display: "inline", marginLeft:15, color:"#919191" }}>{post.frontmatter.date}</h3>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <br></br>
        <Link to="/blog" style={{marginRight: 20}}>Go back to posts</Link>
        <Link to="/">Go back to homepage</Link>
        <div style={{marginBottom:20}}></div>
      </div>
    </Layout>
  )
}

//slug is received in this Page Query from the context of the createPages() function in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD. MMMM YYYY")
      }
    }
  }
`
