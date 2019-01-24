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

export default class Header extends React.Component {
  render() {
    return (
      <FixedHeader>
        <HeaderInner>
          <h1>
            <a href="#">
              Company
              <span>logo</span>
            </a>
          </h1>

          <nav>
            <a href="#">Home</a>
            <a href="#" className="selected">
              Blog
            </a>
            <a href="#">Pricing</a>
            <a href="#">About</a>
            <a href="#">Faq</a>
            <a href="#">Contact</a>
          </nav>
        </HeaderInner>
      </FixedHeader>
    );
  }
}
