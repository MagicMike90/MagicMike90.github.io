import React from "react";
import SplitText from "react-pose-text";

const charPoses = {
  exit: { opacity: 0 },
  enter: { opacity: 1 },
  hover: {
    y: 0,
    transition: ({ charInWordIndex }) => ({
      type: "spring",
      velocity: 100 * Math.sin(1 + charInWordIndex),
      damping: 0
    })
  }
};
const wordPoses = {
  hoverable: true
};
function AnimatedText({ text }) {
  return (
    <React.Fragment>
      <SplitText wordPoses={wordPoses} charPoses={charPoses}>
        {text}
      </SplitText>
    </React.Fragment>
  );
}

export default AnimatedText;
