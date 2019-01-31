import React from "react";
import { Link, graphql } from "gatsby";
import _ from "lodash";
import SEO from "../components/seo";
import Grid from "@material-ui/core/Grid";
import Card from "../core/Card";
import styled from "styled-components";
import posed from "react-pose";

const ListContainer = posed.div({
  enter: {
    staggerChildren: 50
  },
  exit: { staggerChildren: 20, staggerDirection: -1 }
});

const Item = posed.article({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0, transition: { duration: 200 } }
});

const StyeldP = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin: 10px 0;
`;
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

    return (
      <React.Fragment>
        <SEO
          title="All posts"
          keywords={["blog", "gatsby", "javascript", "react"]}
        />
        <h1>The notes from the books I have read</h1>

        <ListContainer>
          <Grid container spacing={8}>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              return (
                <Grid item xs={12} sm={6} key={node.fields.slug}>
                  <Item>
                    <Link style={{ boxShadow: "none" }} to={node.fields.slug}>
                      <Card title={title}>
                        <small>{node.frontmatter.date}</small>

                        <StyeldP
                          dangerouslySetInnerHTML={{ __html: node.excerpt }}
                        />
                      </Card>
                    </Link>
                  </Item>
                </Grid>
              );
            })}
          </Grid>
        </ListContainer>
      </React.Fragment>
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
