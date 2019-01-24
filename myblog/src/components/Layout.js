import React from 'react';
import styled from 'styled-components';

import Header from '../core/Header';

import { rhythm, scale } from '../core/utils/typography';

const Container = styled.main`
  padding: ${rhythm(4)} ${rhythm(6)};
  background: white;
`;
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <div>
        <Header />
        <Container>{children}</Container>
        <footer>
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
, Built with
          {' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    );
  }
}

export default Layout;
