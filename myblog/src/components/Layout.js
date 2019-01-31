import React from "react";
import styled from "styled-components";
import { withPrefix } from "gatsby";
import Header from "../core/Header";
import posed, { PoseGroup } from "react-pose";

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

const Transition = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

class Layout extends React.Component {
  render() {
    const { location, children } = this.props;
    const isHomepage = location.pathname === withPrefix("/");

    console.log("location", location);
    return (
      <React.Fragment>
        <Header />
        <Container isHomepage={isHomepage}>
          <PoseGroup>
            <Transition key={location.pathname}>{children}</Transition>
          </PoseGroup>
        </Container>
        <Footer isHomepage={isHomepage}>
          © {new Date().getFullYear()} Michael Luo
        </Footer>
      </React.Fragment>
    );
  }
}

export default Layout;
