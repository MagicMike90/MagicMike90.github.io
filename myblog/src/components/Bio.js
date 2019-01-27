import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import styled from 'styled-components';
import { Linkedin } from 'styled-icons/fa-brands/Linkedin';
import { GithubSquare } from 'styled-icons/fa-brands/GithubSquare';
import { Location } from 'styled-icons/icomoon/Location';

import Divider from '../core/Divider';

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
              <ul className="nav contact-infos d-flex justify-content-between">
                <li>
                  <a className="" href="">
                    <Location size="48" />
                    <span>Syndey, NSW</span>
                  </a>
                </li>
                <li>
                  <a href="http://magicmike90.github.io/">
                    <GithubSquare size="48" />
                    <span>MagicMike90.github.io</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:michael.luo0801@gmail">
                    <Linkedin size="48" />
                    <span>michael.luo0801@gmail.com</span>
                  </a>
                </li>
              </ul>
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
