import React from 'react';
import styled from 'styled-components';

import { mediaQuery, standardStyles } from '../../utils/styles';

const Wrapper = styled.div`
  background: #d4d4d4;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;

  ${mediaQuery(
    'ios',
    `
    fontSize: 5rem;
    `
  )};
  ${mediaQuery(
    'android',
    `
    fontSize: 5rem;
    `
  )};
  ${mediaQuery(
    'tablet',
    `
    fontSize: 5rem;
    `
  )};
  ${mediaQuery(
    'laptop',
    `
    fontSize: 5rem;
    `
  )};

  ${mediaQuery(
    'desktop',
    `
    fontSize: 10rem;
    `
  )};
`;

export default function WithInterface(Component) {
  return function WithInterfaceComponent({ keyPress, handleGameState }) {
    return (
      <Wrapper>
        <Component keyPress={keyPress} handleGameState={handleGameState} />
      </Wrapper>
    );
  };
}
