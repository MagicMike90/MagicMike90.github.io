import React from "react";
import styled from "styled-components";

import Header from "../core/Header";

const Container = styled.main`
  background: white;
  padding: 4rem 0;

  @media (min-width: 700px) {
    padding: 4rem 6rem;
  }
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
        <Footer>
          © {new Date().getFullYear()} , Built with{" "}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </div>
    );
  }
}

export default Layout;
