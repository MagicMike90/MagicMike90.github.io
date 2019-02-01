import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { shine } from "../core/Effect";
import posed, { PoseGroup } from "react-pose";
import Divider from "../core/Divider";
import AnimatedText from "./AnimatedText";
import SplitText from "react-pose-text";

const Section = posed.section({
  enter: {
    beforeChildren: true,
    staggerChildren: 50
  }
});

const charPoses = {
  exit: { opacity: 0 },
  enter: { opacity: 1 }
};

const ContentInner = styled.div`
  // :hover {
  //   opacity: 1;
  //   mask-image: linear-gradient(
  //     -75deg,
  //     rgba(0, 0, 0, 0.6) 30%,
  //     #000 50%,
  //     rgba(0, 0, 0, 0.6) 70%
  //   );
  //   mask-size: 200%;
  //   animation: ${shine} 1.5s infinite;
  // }
`;
const StyledName = styled.div`
  margin: 0;
`;
const StyledSubtitle = styled.div`
  font-size: 0.5em;
`;
function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, role } = data.site.siteMetadata;

        return (
          <div>
            <ContentInner>
              <Section initialPose="exit" pose="enter">
                <StyledSubtitle>Hello, I am</StyledSubtitle>
                <StyledName>{author}</StyledName>
                <StyledSubtitle>{role}</StyledSubtitle>
              </Section>
            </ContentInner>
            <Divider className="stripe teal" />
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        role
        social {
          linkedin
          github
        }
      }
    }
  }
`;

export default Bio;
