import React from 'react'
import { graphql } from 'gatsby'
import { H1, H3, Span, Link } from '../elements'
import Layout from '../components/layout'

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <H1>Amazing Pandas Eating Things</H1>

        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <H3>
                {node.frontmatter.title} <Span>— {node.frontmatter.date}</Span>
              </H3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
