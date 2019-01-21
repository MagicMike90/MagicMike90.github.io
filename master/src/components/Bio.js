import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Avartar from '../styles/Avartar'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <header>
            <Avartar>
              <Avartar.Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
            </Avartar>
            <p>
              <strong>{author}</strong>
              <a href={`https://twitter.com/${social.twitter}`}>
                You should follow him on Twitter
              </a>
            </p>
          </header>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 75, height: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          linkedin
        }
      }
    }
  }
`

export default Bio
