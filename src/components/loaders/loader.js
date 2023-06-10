import React from 'react';
import styled, { keyframes } from 'styled-components';
import { mediaQuery, standardStyles } from '../../utils/styles';

const rotate = keyframes`
    0% {transform: rotate(0deg)}
    100% {transform: rotate(360deg)}
`;

const Circle = styled.div`
  border-radius: 50%;
  box-sizing: border-box;
  animation: ${rotate} 1s ease-in-out infinite;

  ${mediaQuery(
    'ios',
    `
    height: 1.5rem;
    width: 1.5rem;
    border: 0.2rem solid ${standardStyles.colorPrimary};
    border-bottom-color: transparent;
  `
  )};
  ${mediaQuery(
    'android',
    `
    height: 1.5rem;
    width: 1.5rem;
    border: 0.2rem solid ${standardStyles.colorPrimary};
    border-bottom-color: transparent;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    height: 2rem;
    width: 2rem;
    border: 0.3rem solid ${standardStyles.colorPrimary};
    border-bottom-color: transparent;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    height: 3rem;
    width: 3rem;
    border: 0.4rem solid ${standardStyles.colorPrimary};
    border-bottom-color: transparent;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    height: 3rem;
    width: 3rem;
    border: 0.5rem solid ${standardStyles.colorPrimary};
    border-bottom-color: transparent;
  `
  )};
`;

export default function Loader({ size }) {
  return <Circle size={size} />;
}
