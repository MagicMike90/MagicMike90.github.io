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
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Faq</NavLink>
            <NavLink href="#">Contact</NavLink>
          </HeaderNav>
        </HeaderInner>
      </FixedHeader>
    );
  }
}
