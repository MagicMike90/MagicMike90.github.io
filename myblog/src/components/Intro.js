import React from "react";
import styled from "styled-components";
import { shine } from "../core/Effect";
import Divider from "../core/Divider";

const Content = styled.div``;
const ContentInner = styled.div`
  :hover {
    opacity: 1;
    mask-image: linear-gradient(
      -75deg,
      rgba(0, 0, 0, 0.6) 30%,
      #000 50%,
      rgba(0, 0, 0, 0.6) 70%
    );
    mask-size: 200%;
    animation: ${shine} 1.5s infinite;
  }
`;
const StyledName = styled.p`
  margin: 0;
`;
const StyledSubtitle = styled.div`
  font-size: 0.5em;
`;
function Intro() {
  return (
    <Content>
      <ContentInner>
        <StyledSubtitle>Hello, I am </StyledSubtitle>
        <StyledName>Michael Luo</StyledName>
        <StyledSubtitle>Software Engineer</StyledSubtitle>
      </ContentInner>
      <Divider className="stripe teal" />
    </Content>
  );
}

export default Intro;
