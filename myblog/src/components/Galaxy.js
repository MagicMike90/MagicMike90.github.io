import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";

const StyledParticles = styled(Particles)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #20232f;
`;

export const Galaxy = () => (
  <StyledParticles
    params={{
      particles: {
        number: {
          value: 160,
          density: {
            enable: true,
            value_area: 1500
          }
        },
        line_linked: {
          enable: false,
          opacity: 0.02
        },
        move: {
          direction: "right",
          speed: 0.1
        },
        size: {
          value: 2
        },
        opacity: {
          anim: {
            enable: true,
            speed: 5,
            opacity_min: 0.05
          }
        }
      },
      interactivity: {
        events: {
          onclick: {
            enable: true,
            mode: "push"
          }
        },
        modes: {
          push: {
            particles_nb: 1
          }
        }
      },
      retina_detect: true
    }}
  />
);
