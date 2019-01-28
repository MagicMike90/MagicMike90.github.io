import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { shine } from '../core/Effect';

const Content = styled.div`
  line-height: 0;

  :hover {
    opacity: 1;
    -webkit-mask-image: linear-gradient(
      -75deg,
      rgba(0, 0, 0, 0.6) 30%,
      #000 50%,
      rgba(0, 0, 0, 0.6) 70%
    );
    -webkit-mask-size: 200%;
    animation: ${shine} 2s infinite;
  }
`;

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author, social } = data.site.siteMetadata;
        return (
          <Content>
            <p>Hello, I am </p>
            <h1>Michael Luo</h1>
            <p>Software Engineer</p>

            {/* <Divider /> */}
          </Content>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          linkedin
          github
        }
      }
    }
  }
`;

export default Bio;
