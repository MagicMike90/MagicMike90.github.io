import React from 'react';
import { Linkedin } from 'styled-icons/fa-brands/Linkedin';
import { GithubSquare } from 'styled-icons/fa-brands/GithubSquare';

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

function Social() {
  return (
    <div className="icon-bar">
      <SocialLink href="http://magicmike90.github.io/">
        <GithubSquare size="32" />
      </SocialLink>
      <SocialLink href="mailto:michael.luo0801@gmail">
        <Linkedin size="32" />
      </SocialLink>
    </div>
  );
}

export default Social;
