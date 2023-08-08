import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { NODE_SIZES, GAME_STATES, DIFFICULTY } from './models';
import SnakeMenuComponent from './menu';
import SnakeDifficultyComponent from './difficulty';
import SnakePlayComponent from './play';
import SnakeGameOverComponent from './game-over';
import { standardStyles, mediaQuery } from '../../utils/styles';

const GRID_LENGTH = 30;

const GridWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(30, 1fr);
  grid-template-rows: repeat(30, 1fr);
`;

export default function SnakeGameComponent({ keyDown }) {
  const [gameState, setGameState] = useState(GAME_STATES.MENU);
  const difficulty = useRef(null);

  const handleGameState = (gameState) => {
    setGameState(gameState);
  };

  const handleDifficulty = (level) => {
    difficulty.current = level;
  };

  return (
    <GridWrapper>
      {gameState === GAME_STATES.MENU && (
        <SnakeMenuComponent
          keyDown={keyDown}
          handleGameState={handleGameState}
        />
      )}
      {gameState === GAME_STATES.DIFFICULTY && (
        <SnakeDifficultyComponent
          keyDown={keyDown}
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
  );
}
