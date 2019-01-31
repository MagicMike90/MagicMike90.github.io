// custom typefaces
import "typeface-montserrat";
import "./src/styles/global.css";

import React from "react";
import posed, { PoseGroup } from "react-pose";
import Layout from "./src/components/Layout";

/**
 * @dealy A duration, in milliseconds, to delay this transition. Does not affect children.
 */
const Transition = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});
