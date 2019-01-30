import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import { Github } from "styled-icons/fa-brands/Github";
import { LinkedinIn } from "styled-icons/fa-brands/LinkedinIn";
import { shine } from "./Effect";

const FixedHeader = styled.nav`
  background-color: #20232f;
  padding: 15px 0;
  color: #ffffff;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  align-items: center;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderH1 = styled.h1`
  line-height: 40px;
  margin: 0;
  font-size: 28px;
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

const HeaderMenu = styled.ul`
  font-size: 16px;
  line-height: 1.5;
  box-sizing: border-box;
  outline: none;
  list-style: none;
  color: rgba(0, 0, 0, 0.65);
  line-height: 0;
  transition: background 0.3s, width 0.2s;
  padding: 0;

  @media all and (max-width: 600px) {
    line-height: 1;
    float: none;
  }
`;

const MenuItem = styled.li`
  display: inline-block;
  color: #ffffff;
`;

const LogoLinked = styled(Link)`
  color: #ffffff;
  text-decoration: none;

  :hover {
    opacity: 1;
    -webkit-mask-image: linear-gradient(
      -75deg,
      rgba(0, 0, 0, 0.6) 30%,
      #000 50%,
      rgba(0, 0, 0, 0.6) 70%
    );
    -webkit-mask-size: 200%;
    animation: ${shine} 2s infinite;
  }
`;

const StyledLink = styled(LogoLinked)`
  padding: 0.7em calc(0.7em * 1.2);
  border: 3px solid transparent;
  position: relative;

  :before {
    content: "";
    position: absolute;
    content: "";
    bottom: -3px;
    left: calc(0.7em * 1.2);
    right: calc(0.7em * 1.2);
    height: 3px;
    background: #1c46f2;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  :hover:before {
    visibility: visible;
    transform: scaleX(1);
  }

  &.selected {
    color: #1c46f2;
    opacity: 1;
  }
  &.selected:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;
const SocialLink = styled.a`
  padding: 0.7em calc(0.7em * 1.2);
  border: 3px solid transparent;
  position: relative;
  font-size: 18px;
  color: inherit;
  transition: 200ms;
  transition-timing-function: ease-in-out;

  :hover {
    color: #1c46f2;
  }
`;
const StyledGithubIcon = styled(Github)`
  @media all and (max-width: 600px) {
    width: 24px;
  }
`;

const StyledLinkedinInIcon = styled(LinkedinIn)`
  @media all and (max-width: 600px) {
    width: 24px;
  }
`;
export default class Header extends React.Component {
  render() {
    return (
      <FixedHeader>
        <HeaderInner>
          {/* <HeaderH1>
            <LogoLinked to="/">
              Company
              <HeaderSpan>logo</HeaderSpan>
            </LogoLinked>
          </HeaderH1> */}

          <HeaderMenu>
            <MenuItem>
              <StyledLink to="/" activeClassName="selected">
                Home
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink
                to="/blog/"
                activeClassName="selected"
                state={{
                  pleasant: "reasonably"
                }}
              >
                Notes
              </StyledLink>
            </MenuItem>
          </HeaderMenu>
          <span>
            <SocialLink href="http://magicmike90.github.io/">
              <StyledGithubIcon size={32} />
            </SocialLink>
            <SocialLink href="mailto:michael.luo0801@gmail">
              <StyledLinkedinInIcon size={32} />
            </SocialLink>
          </span>
        </HeaderInner>
      </FixedHeader>
    );
  }
}
