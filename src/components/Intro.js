import React from "react";
import styled from "styled-components";
import { shine } from "../core/Effect";
import Divider from "../core/Divider";

const Content = styled.div``;
const ContentInner = styled.div`
  margin: 20px;

  @media all and (min-width: 600px) {
    max-width: 60%;
  }
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
const Caption = styled.p`
  margin: 0;
`;
const Text = styled.p`
  font-size: 0.3em;
  margin-top: 1.4rem;

  @media all and (max-width: 600px) {
    font-size: 13px;
  }
`;
function Intro() {
  return (
    <Content>
      <ContentInner>
        <Caption>About Me</Caption>
        <div className={`stripe pink`} />
        <Text>
          Specializing in software design and development, broad range knowledge
          of different technology stacks, accomplished in object-oriented
          programming and software development lifecycle. I am also well versed
          in user experience design and have proven ability to work effectively
          as part of a team and individually.
        </Text>
      </ContentInner>
    </Content>
  );
}

export default Intro;
