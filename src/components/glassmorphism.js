import React from 'react';
import styled from 'styled-components';

const Glass = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  border: 0.1rem solid rgba(209, 213, 219, 0.3);
  border-radius: 1.6rem;
  padding: 2rem;
  -webkit-backdrop-filter: blur(3rem);
  backdrop-filter: blur(3rem);
  z-index: 100;
  ${(props) => props.styles}
`;

export default function GlassMorphism({ styles, children }) {
  return <Glass styles={styles}>{children}</Glass>;
}
