import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

import StyledApp from '../styles/StyledApp'
import Menu from '../styles/Menu'
import Bio from './Bio'

const menus = ['projects', 'about', 'contact']

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <StyledApp>
        <StyledApp.Siderbar>
          <StyledApp.Siderbar.Inner>
            <Bio />
            <Menu>
              <Menu.List>
                {menus.map(item => {
                  return (
                    <Menu.ListItem>
                      <Link
                        style={{
                          boxShadow: `none`,
                          textDecoration: `none`,
                          color: `inherit`,
                        }}
                        to={`/${item}`}
                      >
                        {item}
                      </Link>
                    </Menu.ListItem>
                  )
                })}
              </Menu.List>
            </Menu>
          </StyledApp.Siderbar.Inner>
        </StyledApp.Siderbar>
        <StyledApp.Container>
          {header}
          {children}
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </StyledApp.Container>
      </StyledApp>
    )
  }
}

export default Layout
