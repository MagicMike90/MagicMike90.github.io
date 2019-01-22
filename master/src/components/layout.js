import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

import AppLayout from '../styles/AppLayout'
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
            {'test'}
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
            {'test'}
          </Link>
        </h3>
      )
    }
    return (
      <AppLayout>
        <AppLayout.Siderbar>
          <AppLayout.Siderbar.Inner>
            <Bio />
            <Menu>
              <Menu.List>
                {menus.map(item => {
                  return (
                    <Menu.ListItem key={item}>
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
          </AppLayout.Siderbar.Inner>
        </AppLayout.Siderbar>
        <AppLayout.Container>
          {/* {header} */}

          {children}
        </AppLayout.Container>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </AppLayout>
    )
  }
}

export default Layout
