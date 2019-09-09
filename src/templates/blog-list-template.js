import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Button } from "react-bootstrap"

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    //for Pagination Links
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1
        ? "/blog"
        : "/blog/".concat((currentPage - 1).toString())
    const nextPage = "/blog/".concat((currentPage + 1).toString())

    return (
      <Layout>
        <h2>Blog posts overview</h2>

        <Link to="/markdownpage" style={{marginRight: 20}}><Button>Show all posts</Button></Link>
  
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
            return (
              <>
              <Link to={node.fields.slug} style={{fontWeight:"bold", display:"block", marginTop: 20}}>{title}</Link>
              <p>{node.excerpt}</p>
              </>
            )
        })}

        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Previous Page
          </Link>
        )}

        {Array.from({ length: numPages }, (_, i) => (
          <Link style={{marginRight: 10, marginLeft: 10}}
            key={`pagination-number${i + 1}`}
            to={`/${i === 0 ? "/blog" : "/blog/".concat(i + 1)}`}
          >
            {i + 1}
          </Link>
        ))}

        {!isLast && (
          <Link to={nextPage} rel="next">
            Next Page →
          </Link>
        )}

        <div style={{marginBottom:20}}></div>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 23)
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
