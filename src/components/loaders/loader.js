import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    0% {transform: rotate(0deg)}
    100% {transform: rotate(360deg)}
`;

const Circle = styled.div`
  border-radius: 50%;
  height: ${(props) => props.size}vh;
  width: ${(props) => props.size}vh;
  box-sizing: border-box;
  border: 0.5vh solid #333333;
  border-bottom-color: transparent;
  animation: ${rotate} 1s ease-in-out infinite;
`;

export default function Loader({ size }) {
  return <Circle size={size} />;
}
