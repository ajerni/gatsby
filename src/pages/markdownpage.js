import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const MarkdownPage = ({ data }) => (
  <Layout>
    <h2>Markdown files</h2>
    {data.allMarkdownRemark.edges.map(({ node }, index) => (
      <div key={index}>
        <div>
          <h3 style={{ display: "inline" }}>Post Nr. {index + 1}</h3>
          <Link
            style={{ display: "inline", marginLeft: 15 }}
            to={node.fields.slug}
          >
            click here to go to this post
          </Link>
        </div>
        <p style={{ marginTop: 15 }}>Takes {node.timeToRead} mins to read</p>
        <p>and has {node.wordCount.words} words</p>
        <p style={{ marginBottom: 3, textDecoration: "underline" }}>
          Post preview:
        </p>
        <p>{node.excerpt}</p>
        <div dangerouslySetInnerHTML={{ __html: node.html }} />
      </div>
    ))}
    <Link to="/blog" style={{marginRight: 20}}>Go back to posts</Link>
    <Link to="/">Go back to homepage</Link>
    <div style={{marginBottom:20}}></div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          timeToRead
          excerpt(pruneLength: 280)
          fields {
            slug
          }
          wordCount {
            paragraphs
            sentences
            words
          }
          html
        }
      }
    }
  }
`

export default MarkdownPage
