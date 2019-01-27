import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import styled from 'styled-components';
import { Linkedin } from 'styled-icons/fa-brands/Linkedin';
import { GithubSquare } from 'styled-icons/fa-brands/GithubSquare';
import { Location } from 'styled-icons/icomoon/Location';

import Divider from '../core/Divider';

const StyledUl = styled.ul`
  display: flex;
  list-style-type: none;
  font-size: 12px;
  color: white;
  padding: 0;
  margin: 0;
`;

const StyledLi = styled.li`
  flex: 1;
`;

const StyledLink = styled.a`
  font-size: 18;
  color: white;
`;
const StyledLinkText = styled.span`
  padding: 15px 0;
`;
function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author, social } = data.site.siteMetadata;
        return (
          <section id="welcome" className="section welcome">
            <div className="content">
              <h5>Hello, I am </h5>
              <h1>Michael Luo</h1>
              <h5>Software Engineer</h5>
              <Divider />
              <StyledUl className="nav contact-infos d-flex justify-content-between">
                <StyledLi>
                  <StyledLink className="" href="">
                    <Location size="12" />
                    <StyledLinkText>Syndey, NSW</StyledLinkText>
                  </StyledLink>
                </StyledLi>
                <StyledLi>
                  <StyledLink href="http://magicmike90.github.io/">
                    <GithubSquare size="12" />
                    <StyledLinkText>MagicMike90.github.io</StyledLinkText>
                  </StyledLink>
                </StyledLi>
                <StyledLi>
                  <StyledLink href="mailto:michael.luo0801@gmail">
                    <Linkedin size="12" />
                    <StyledLinkText>michael.luo0801@gmail.com</StyledLinkText>
                  </StyledLink>
                </StyledLi>
              </StyledUl>
            </div>
          </section>
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
