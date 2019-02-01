// custom typefaces
import "typeface-montserrat";
import "./src/styles/global.css";

import React from "react";
import posed, { PoseGroup } from "react-pose";
import Layout from "./src/components/Layout";

const transitionDelay = 350;

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

// export const shouldUpdateScroll = ({
//   routerProps: { location },
//   getSavedScrollPosition
// }) => {
//   if (location.action === "PUSH") {
//     window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
//   } else {
//     const savedPosition = getSavedScrollPosition(location);
//     window.setTimeout(
//       () => window.scrollTo(...(savedPosition || [0, 0])),
//       transitionDelay
//     );
//   }
//   return false;
// };
