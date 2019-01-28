import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { shine } from '../core/Effect';
import Divider from '../core/Divider';

const Content = styled.div`
  font-size: 6rem;
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

const StyledName = styled.p`
  margin: 0;
`;
const StyledSubtitle = styled.div`
  font-size: 2rem;
`;
function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => (
        <Content>
          <StyledSubtitle>Hello, I am </StyledSubtitle>
          <StyledName>Michael Luo</StyledName>
          <StyledSubtitle>Software Engineer</StyledSubtitle>
          <Divider />
        </Content>
      )}
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
