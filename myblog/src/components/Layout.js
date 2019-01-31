import React from "react";
import styled from "styled-components";

import Header from "../core/Header";

const rootPath = `${__PATH_PREFIX__}/`;

const Container = styled.main`
  background: white;
  padding: ${props =>
    props.location !== rootPath ? "100px 15px 50px 15px" : 0};
`;
const Footer = styled.footer`
  text-align: center;
  width: 100%;
  background-color: #20232f;
  color: #ffffff;
  padding: 15px;
  display: ${props => (props.location !== rootPath ? "block" : "none")};
`;

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;

    return (
      <React.Fragment>
        <Header />
        <Container location={location.pathname}>{children}</Container>
        <Footer location={location.pathname}>
          © {new Date().getFullYear()} Michael Luo
        </Footer>
      </React.Fragment>
    );
  }
}

export default Layout;
