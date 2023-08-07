import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { NODE_SIZES, GAME_STATES, DIFFICULTY } from './models';
import SnakeMenuComponent from './menu';
import SnakeDifficultyComponent from './difficulty';
import SnakePlayComponent from './play';
import SnakeGameOverComponent from './game-over';
import { standardStyles, mediaQuery } from '../../utils/styles';

const GRID_LENGTH = 40;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${standardStyles.colorPrimary};
`;

const GridWrapper = styled.div`
  position: relative;
  display: grid;
  ${mediaQuery(
    'ios',
    `
    width: calc(${GRID_LENGTH * NODE_SIZES.EXTRA_SMALL}rem);
    grid-template-columns: repeat(${GRID_LENGTH}, ${NODE_SIZES.EXTRA_SMALL}rem);
    grid-template-rows: repeat(${GRID_LENGTH}, ${NODE_SIZES.EXTRA_SMALL}rem);
    left: calc(50% - ${(GRID_LENGTH / 2) * NODE_SIZES.EXTRA_SMALL}rem);
    top: calc(50% - ${(GRID_LENGTH / 2) * NODE_SIZES.EXTRA_SMALL}rem);
    `
  )};
  ${mediaQuery(
    'android',
    `
    width: calc(${GRID_LENGTH * NODE_SIZES.EXTRA_SMALL}rem);
    grid-template-columns: repeat(${GRID_LENGTH}, ${NODE_SIZES.EXTRA_SMALL}rem);
    grid-template-rows: repeat(${GRID_LENGTH}, ${NODE_SIZES.EXTRA_SMALL}rem);
    left: calc(50% - ${(GRID_LENGTH / 2) * NODE_SIZES.EXTRA_SMALL}rem);
    top: calc(50% - ${(GRID_LENGTH / 2) * NODE_SIZES.EXTRA_SMALL}rem);
    `
  )};
  ${mediaQuery(
    'tablet',
    `
    width: calc(${GRID_LENGTH * NODE_SIZES.SMALL}rem);
    grid-template-columns: repeat(${GRID_LENGTH}, ${NODE_SIZES.SMALL}rem);
    grid-template-rows: repeat(${GRID_LENGTH}, ${NODE_SIZES.SMALL}rem);
    left: calc(50% - ${(GRID_LENGTH / 2) * NODE_SIZES.SMALL}rem);
    top: calc(50% - ${(GRID_LENGTH / 2) * NODE_SIZES.SMALL}rem);
    `
  )};
  ${mediaQuery(
    'laptop',
    `
    width: calc(${GRID_LENGTH * NODE_SIZES.MEDIUM}rem);
    grid-template-columns: repeat(${GRID_LENGTH}, ${NODE_SIZES.MEDIUM}rem);
    grid-template-rows: repeat(${GRID_LENGTH}, ${NODE_SIZES.MEDIUM}rem);
    left: calc(50% - ${(GRID_LENGTH / 2) * NODE_SIZES.MEDIUM}rem);
    top: calc(50% - ${(GRID_LENGTH / 2) * NODE_SIZES.MEDIUM}rem);
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    width: calc(${GRID_LENGTH * NODE_SIZES.LARGE}rem);
    grid-template-columns: repeat(${GRID_LENGTH}, ${NODE_SIZES.LARGE}rem);
    grid-template-rows: repeat(${GRID_LENGTH}, ${NODE_SIZES.LARGE}rem);
    left: calc(50% - ${(GRID_LENGTH / 2) * NODE_SIZES.LARGE}rem);
    top: calc(50% - ${(GRID_LENGTH / 2) * NODE_SIZES.LARGE}rem);
  `
  )};

  border: 0.25rem solid ${standardStyles.fontColorPrimary};
`;

export default function SnakeComponent() {
  const [gameState, setGameState] = useState(GAME_STATES.MENU);
  const difficulty = useRef(null);

  const handleGameState = (gameState) => {
    setGameState(gameState);
  };

  const handleDifficulty = (level) => {
    difficulty.current = level;
  };

  return (
    <Wrapper>
      <GridWrapper>
        {gameState === GAME_STATES.MENU && (
          <SnakeMenuComponent handleGameState={handleGameState} />
        )}
        {gameState === GAME_STATES.DIFFICULTY && (
          <SnakeDifficultyComponent
            handleDifficulty={handleDifficulty}
            handleGameState={handleGameState}
          />
        )}

        {(gameState === GAME_STATES.START ||
          gameState === GAME_STATES.GAMEOVER ||
          gameState === GAME_STATES.WIN) && (
          <SnakePlayComponent
            gridLength={GRID_LENGTH}
            difficulty={difficulty}
            handleGameState={handleGameState}
          />
        )}
        {gameState === GAME_STATES.GAMEOVER && (
          <SnakeGameOverComponent
            content="GAME OVER"
            handleGameState={handleGameState}
          />
        )}
        {gameState === GAME_STATES.WIN && (
          <SnakeGameOverComponent
            content="YOU WON!"
            handleGameState={handleGameState}
          />
        )}
      </GridWrapper>
    </Wrapper>
  );
}
