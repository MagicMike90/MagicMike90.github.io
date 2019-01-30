import React from "react";
import styled from "styled-components";

import Header from "../core/Header";

const rootPath = `${__PATH_PREFIX__}/`;
const Container = styled.main`
  background: white;
  padding: ${props => (props.rootPath !== rootPath ? "100px 15px 0 15px" : 0)};
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

    return (
      <div>
        <Header />
        <Container location={location.pathname}>{children}</Container>
        <Footer>© {new Date().getFullYear()} , Michael Luo</Footer>
      </div>
    );
  }
}

export default Layout;
