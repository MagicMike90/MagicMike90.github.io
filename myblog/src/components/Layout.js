import React from 'react';
import { Link } from 'gatsby';

import Header from '../core/Header';

import { rhythm, scale } from '../core/utils/typography';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <div>
        <Header />
        {children}
        <footer>
          ©
          {' '}
          {new Date().getFullYear()}
, Built with
          {' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    );
  }
}

export default Layout;
