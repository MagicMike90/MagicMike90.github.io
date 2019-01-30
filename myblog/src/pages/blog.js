import React from "react";
import { Link, graphql } from "gatsby";
import _ from "lodash";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import Grid from "@material-ui/core/Grid";
import Card from "../core/Card";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={["blog", "gatsby", "javascript", "react"]}
        />

        <Grid container>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <Grid item xs={12} sm={6}>
                <article key={node.fields.slug}>
                  <Card title={title}>
                    <Link style={{ boxShadow: "none" }} to={node.fields.slug}>
                      {title}
                    </Link>
                    <small>{node.frontmatter.date}</small>
                    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                  </Card>
                </article>
              </Grid>
            );
          })}
        </Grid>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
