import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout"

const MarkdownPage = ({ data }) => (

<Layout>
    <h1>Markdown files info</h1>
    {data.allMarkdownRemark.edges.map(({ node }, index) => (
      <div key={index}>
        <h3>{index+1}) This post...</h3>
        <p>Takes {node.timeToRead} mins to read</p>
        <p>and has {node.wordCount.words} words</p>
        <p>Post preview: {node.excerpt}</p>
        <div dangerouslySetInnerHTML={{ __html: node.html }} />
      </div> 
    ))}
    <Link to="/">Go home</Link>
</Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          timeToRead
          excerpt(pruneLength: 280)
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
`;

export default MarkdownPage;