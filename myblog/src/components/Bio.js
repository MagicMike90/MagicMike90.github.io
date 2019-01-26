import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author, social } = data.site.siteMetadata;
        return (
          <div>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginBottom: 0,
                minWidth: 50,
                borderRadius: '100%',
              }}
              imgStyle={{
                borderRadius: '50%',
              }}
            />
            <p>
              Written by
              {' '}
              <strong>{author}</strong>
              {' '}
who lives and works in San Francisco building
              useful things.
              {' '}
              <a href={`https://github.com/${social.github}`}>You should follow him on Twitter</a>
              <a href={`https://www.linkedin.com/in/${social.linkin}`}>
                You should follow him on Twitter
              </a>
            </p>
          </div>
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
