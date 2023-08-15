import React, { forwardRef, useRef, useState } from 'react';
import styled from 'styled-components';

import { GAME_STATES } from './models';
import SnakeMenuComponent from './menu';
import SnakeDifficultyComponent from './difficulty';
import SnakePlayComponent from './play';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const SnakeGameComponent = forwardRef(function renderSnakeGame(props, ref) {
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
      {gameState === GAME_STATES.MENU && (
        <SnakeMenuComponent ref={ref} handleGameState={handleGameState} />
      )}
      {gameState === GAME_STATES.DIFFICULTY && (
        <SnakeDifficultyComponent
          ref={ref}
          handleDifficulty={handleDifficulty}
          handleGameState={handleGameState}
        />
      )}

      {gameState === GAME_STATES.START && (
        <SnakePlayComponent
          ref={ref}
          difficulty={difficulty}
          handleGameState={handleGameState}
        />
      )}
    </Wrapper>
  );
});

export default SnakeGameComponent;
