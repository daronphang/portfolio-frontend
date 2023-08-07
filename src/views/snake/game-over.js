import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { GAME_STATES } from './models';
import { mediaQuery, standardStyles } from '../../utils/styles';

const GameOver = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: #e1dbdb;
  font-family: RetroGaming;
  ${mediaQuery(
    'ios',
    `
    width: 30rem;
    height: 10rem;
    left: calc(50% - 15rem);
    top: calc(50% - 5rem);
    font-size: 3rem;
    `
  )};
  ${mediaQuery(
    'android',
    `
    width: 30rem;
    height: 10rem;
    left: calc(50% - 15rem);
    top: calc(50% - 5rem);
    font-size: 3rem;
    `
  )};
  ${mediaQuery(
    'tablet',
    `
    width: 30rem;
    height: 10rem;
    left: calc(50% - 15rem);
    top: calc(50% - 5rem);
    font-size: 3rem;
    `
  )};
  ${mediaQuery(
    'laptop',
    `
    width: 35rem;
    height: 10rem;
    left: calc(50% - 17.5rem);
    top: calc(50% - 5rem);
    font-size: 3.5rem;
    `
  )};

  ${mediaQuery(
    'desktop',
    `
    width: 46rem;
    height: 10rem;
    left: calc(50% - 23rem);
    top: calc(50% - 5rem);
    font-size: 4rem;
    `
  )};
`;

export default function SnakeGameOverComponent({ handleGameState, content }) {
  useEffect(() => {
    setTimeout(() => {
      handleGameState(GAME_STATES.MENU);
    }, 3000);
  });
  return <GameOver>{content}</GameOver>;
}
