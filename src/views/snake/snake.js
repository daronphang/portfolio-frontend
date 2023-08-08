import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { NODE_SIZES, GAME_STATES, DIFFICULTY } from './models';
import SnakeMenuComponent from './menu';
import SnakeDifficultyComponent from './difficulty';
import SnakePlayComponent from './play';
import SnakeGameOverComponent from './game-over';
import { standardStyles, mediaQuery } from '../../utils/styles';

const GRID_LENGTH = 30;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${standardStyles.colorPrimary};
`;

const GameBoy = styled.div`
  background: #f1b544;
  position: relative;
  border-radius: 2rem;

  ${mediaQuery(
    'ios',
    `
    height: 50rem;
    width: 40rem;
  `
  )}
  ${mediaQuery(
    'android',
    `
    height: 50rem;
    width: 40rem;
  `
  )}
  ${mediaQuery(
    'tablet',
    `
    height: 50rem;
    width: 40rem;
  `
  )}
  ${mediaQuery(
    'laptop',
    `
    height: 50rem;
    width: 40rem;
  `
  )}
  ${mediaQuery(
    'desktop',
    `
    height: 110rem;
    width: 60rem;
    left: calc(50% - 30rem);
    top: calc(50% - 55rem);
  `
  )}
`;

const ArrowControlAnchor = styled.div`
  position: absolute;
  background: ${standardStyles.colorPrimary};
  height: 5rem;
  width: 5rem;

  ${mediaQuery(
    'ios',
    `
  `
  )}
  ${mediaQuery(
    'android',
    `

  `
  )}
  ${mediaQuery(
    'tablet',
    `
  `
  )}
  ${mediaQuery(
    'laptop',
    `
  `
  )}
  ${mediaQuery(
    'desktop',
    `
    margin-left: 20rem;
    margin-top: 30rem;
  `
  )}
`;

const ArrowControlButton = styled.div.attrs((props) => ({
  style: {
    transform: `rotate(${props.rotation}rem)`,
  },
}))`
  position: relative;
  background: ${standardStyles.colorPrimary};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  ${mediaQuery(
    'ios',
    `
    height: 10rem;
    width: 5rem;
`
  )}
  ${mediaQuery(
    'android',
    `
    height: 10rem;
    width: 5rem;
`
  )}
${mediaQuery(
    'tablet',
    `
    height: 10rem;
    width: 5rem;
`
  )}
${mediaQuery(
    'laptop',
    `
    height: 10rem;
    width: 5rem;
`
  )}
${mediaQuery(
    'desktop',
    `
  height: 5rem;
  width: 5rem;
`
  )}

  &:before {
    content: '';
    position: absolute;
    border: solid ${standardStyles.fontColorPrimary};
    border-width: 0 0.5rem 0.5rem 0;
    display: inline-block;
    padding: 0.8rem;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    left: 1rem;
    top: 1.2rem;
  }
`;

const GridWrapper = styled.div`
  position: relative;
  display: grid;
  border-radius: 1rem 1rem 0rem 0rem;
  background: ${standardStyles.colorPrimary};
  ${mediaQuery(
    'ios',
    `
    width: calc(${GRID_LENGTH * NODE_SIZES.EXTRA_SMALL}rem);
    grid-template-columns: repeat(${GRID_LENGTH}, ${NODE_SIZES.EXTRA_SMALL}rem);
    grid-template-rows: repeat(${GRID_LENGTH}, ${NODE_SIZES.EXTRA_SMALL}rem);
    left: calc(50% - ${(GRID_LENGTH / 2) * NODE_SIZES.EXTRA_SMALL}rem);
    top: calc(50% - ${(GRID_LENGTH / 2) * NODE_SIZES.EXTRA_SMALL}rem);
    border: 0.5rem solid ${standardStyles.fontColorPrimary};
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
    border: 0.5rem solid ${standardStyles.fontColorPrimary};
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
    border: 0.5rem solid ${standardStyles.fontColorPrimary};
    `
  )};
  ${mediaQuery(
    'laptop',
    `
    width: calc(${GRID_LENGTH * NODE_SIZES.MEDIUM}rem);
    grid-template-columns: repeat(${GRID_LENGTH}, ${NODE_SIZES.MEDIUM}rem);
    grid-template-rows: repeat(${GRID_LENGTH}, ${NODE_SIZES.MEDIUM}rem);
    left: calc(50% - ${(GRID_LENGTH / 2) * NODE_SIZES.MEDIUM}rem);
    top: 5rem;
    border: 0.5rem solid ${standardStyles.fontColorPrimary};
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    width: calc(${GRID_LENGTH * NODE_SIZES.LARGE}rem);
    grid-template-columns: repeat(${GRID_LENGTH}, ${NODE_SIZES.LARGE}rem);
    grid-template-rows: repeat(${GRID_LENGTH}, ${NODE_SIZES.LARGE}rem);
    left: calc(50% - ${(GRID_LENGTH / 2) * NODE_SIZES.LARGE}rem);
    top: 5rem;
    border: 0.4rem solid ${standardStyles.fontColorPrimary};
  `
  )};
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
      <GameBoy>
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
        <ArrowControlAnchor>
          <ArrowControlButton rotation={0} />
        </ArrowControlAnchor>
      </GameBoy>
    </Wrapper>
  );
}
