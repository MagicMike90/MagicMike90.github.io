// custom typefaces
import "typeface-montserrat";
import "./src/styles/global.css";

import React from "react";
import posed, { PoseGroup } from "react-pose";
import Layout from "./src/components/Layout";

const Transition = posed.div({
  enter: { opacity: 1, delay: 150, beforeChildren: true, delayChildren: 0 },
  exit: { opacity: 0 }
});

export const replaceComponentRenderer = ({ props, ...other }) => {
  const { component } = props.pageResources;
  return (
    <Layout location={props.location}>
      <PoseGroup animateOnMount>
        <Transition key={props.location.key}>
          {React.createElement(component, props)}
        </Transition>
      </PoseGroup>
    </Layout>
  );
};
