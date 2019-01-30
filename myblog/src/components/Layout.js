import React from "react";
import styled from "styled-components";

import Header from "../core/Header";

const Container = styled.main`
  background: white;
`;
const Footer = styled.footer`
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <div>
        <Header />
        <Container>{children}</Container>
        <Footer>© {new Date().getFullYear()} , Michael Luo</Footer>
      </div>
    );
  }
}

export default Layout;
