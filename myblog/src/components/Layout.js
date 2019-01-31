import React from "react";
import styled from "styled-components";
import { withPrefix } from "gatsby";
import Header from "../core/Header";

const rootPath = `${__PATH_PREFIX__}/`;

const Container = styled.main`
  background: white;
  padding: ${props => (props.isHomepage ? 0 : "100px 15px 50px 15px")};
`;
const Footer = styled.footer`
  text-align: center;
  width: 100%;
  background-color: #20232f;
  color: #ffffff;
  padding: 15px;
  display: ${props => (props.isHomepage ? "none" : "block")};
`;

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const isHomepage = location.pathname === withPrefix("/");

    return (
      <React.Fragment>
        <Header />
        <Container isHomepage={isHomepage}>{children}</Container>
        <Footer isHomepage={isHomepage}>
          © {new Date().getFullYear()} Michael Luo
        </Footer>
      </React.Fragment>
    );
  }
}

export default Layout;
