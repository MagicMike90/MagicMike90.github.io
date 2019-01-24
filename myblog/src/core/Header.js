import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const FixedHeader = styled.header`
  background-color: #20232f;
  padding: 20px 40px;
  height: 80px;
  color: #ffffff;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;

  -webkit-transition: top 0.3s;
  transition: top 0.3s;

  @media all and (max-width: 600px) {
    padding: 20px 0;
    height: 75px;
  }
`;

const HeaderInner = styled.div`
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
`;

const HeaderH1 = styled.h1`
  float: left;
  font: normal 28px Cookie, Arial, Helvetica, sans-serif;
  line-height: 40px;
  margin: 0;
  font-size: 24px;
  line-height: 30px;

  @media all and (max-width: 600px) {
    float: none;
    margin: -8px 0 10px;
    text-align: center;
    font-size: 24px;
    line-height: 1;
  }
`;

const HeaderSpan = styled.span`
  color: #1c46f2;
`;
const HeaderLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
`;
const HeaderNav = styled.nav`
  font: 16px Arial, Helvetica, sans-serif;
  line-height: 40px;
  float: right;
  line-height: 28px;

  @media all and (max-width: 600px) {
    line-height: 1;
    float: none;
  }
`;

const NavLink = styled(HeaderLink)`
  display: inline-block;
  padding: 0 10px;
  text-decoration: none;
  color: #ffffff;
  opacity: 0.9;

  :hover {
    opacity: 1;
  }
  @media all and (max-width: 600px) {
    font-size: 13px;
  }

  &.selected {
    color: #1c46f2;
    pointer-events: none;
    opacity: 1;
  }
`;

export default class Header extends React.Component {
  render() {
    return (
      <FixedHeader>
        <HeaderInner>
          <HeaderH1>
            <HeaderLink to="/">
              Company
              <HeaderSpan>logo</HeaderSpan>
            </HeaderLink>
          </HeaderH1>

          <HeaderNav>
            <NavLink to="/" activeClassName="selected">
              Home
            </NavLink>
            <NavLink
              to="/blog/"
              activeClassName="selected"
              state={{
                pleasant: 'reasonably',
              }}
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact/"
              activeClassName="selected"
              state={{
                pleasant: 'reasonably',
              }}
            >
              Contact
            </NavLink>
          </HeaderNav>
        </HeaderInner>
      </FixedHeader>
    );
  }
}
