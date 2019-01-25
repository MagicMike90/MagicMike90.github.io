import { keyframes } from 'styled-components';

export const shine = keyframes`
  from {
    -webkit-mask-position: 150%;
  }

  to {
    -webkit-mask-position: -50%;
  }
`;
