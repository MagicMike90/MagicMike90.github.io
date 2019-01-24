import React from 'react';
import styled, { css } from 'styled-components';

const FixedHeader = styled.header`
  background-color: #292c2f;
  box-shadow: 0 1px 1px #ccc;
  padding: 20px 40px;
  height: 80px;
  color: #ffffff;
  box-sizing: border-box;
  top: -100px;

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
  color: #5383d3;
`;
const HeaderLink = styled.a`
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
  padding: 0 5px;
  text-decoration: none;
  color: #ffffff;
  opacity: 0.9;

  :hover {
    opacity: 1;
  }
  @media all and (max-width: 600px) {
    font-size: 13px;
  }
`;

const NavLinkSelected = styled(NavLink)`
  color: #608bd2;
  pointer-events: none;
  opacity: 1;
`;

export default class Header extends React.Component {
  render() {
    return (
      <FixedHeader>
        <HeaderInner>
          <HeaderH1>
            <HeaderLink href="#">
              Company
              <HeaderSpan>logo</HeaderSpan>
            </HeaderLink>
          </HeaderH1>

          <HeaderNav>
            <NavLink href="#">Home</NavLink>
            <NavLink href="#" className="selected">
              Blog
            </NavLink>
            <NavLink href="#">Pricing</NavLink>
            <NavLinkSelected href="#">About</NavLinkSelected>
            <NavLink href="#">Faq</NavLink>
            <NavLink href="#">Contact</NavLink>
          </HeaderNav>
        </HeaderInner>
      </FixedHeader>
    );
  }
}
