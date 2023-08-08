import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';

import { GAME_STATES, GRID_SIZE } from './models';
import { LinkedListNode } from './node';
import { mediaQuery, standardStyles } from '../../utils/styles';

const NODE_STATES = {
  EMPTY: null,
  FOOD: 'FOOD',
  SNAKE: 'SNAKE',
};
const DIRECTIONS = {
  LEFT: 'ArrowLeft',
  UP: 'ArrowUp',
  RIGHT: 'ArrowRight',
  DOWN: 'ArrowDown',
};

const setNodeBackground = (state) => {
  if (state === NODE_STATES.EMPTY) return '#cfcfc3';
  else return standardStyles.colorPrimary;
};

const GridWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(${GRID_SIZE}, 1fr);
  grid-template-rows: repeat(${GRID_SIZE}, 1fr);
`;

const Node = styled.div.attrs((props) => ({
  style: {
    background: setNodeBackground(props.state),
  },
}))`
  width: auto;
  height: auto;
`;

const GameOver = styled.div`
  position: absolute;
  font-family: RetroGaming;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  text-align: center;
  background: #cfcfc3;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 2rem;
  font-size: 3rem;
  width: 25rem;
  height: 8rem;
  left: calc(50% - 12.5rem);
  top: calc(50% - 2.5rem);
`;

const SnakePlayComponent = forwardRef(function renderSnakeGame(
  { difficulty, handleGameState },
  ref
) {
  // states that do not need to trigger rerender of component
  // should not use React hooks for optimization
  const grid = useRef(null);
  const head = useRef(null);
  const tail = useRef(null);
  const direction = useRef(DIRECTIONS.RIGHT);
  const frameInterval = useRef(null);
  const maxScore = Math.pow(GRID_SIZE, 2);

  // requires rendering of DOM
  const [updateGrid, setUpdateGrid] = useState(false);
  const [gridNodes, setGridNodes] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // initialization
    grid.current = initGrid();
    renderGrid();
    frameInterval.current = setInterval(() => {
      updateHeadinGrid();
      setUpdateGrid((prev) => !prev);
    }, difficulty.current);
  }, []);

  useImperativeHandle(
    ref,
    () => {
      return { handleKeyDown };
    },
    []
  );

  const handleKeyDown = (key) => {
    let prev = direction.current;
    switch (key) {
      case DIRECTIONS.UP:
        if (prev !== DIRECTIONS.DOWN) direction.current = DIRECTIONS.UP;
        break;
      case DIRECTIONS.DOWN:
        if (prev !== DIRECTIONS.UP) direction.current = DIRECTIONS.DOWN;
        break;
      case DIRECTIONS.LEFT:
        if (prev !== DIRECTIONS.RIGHT) direction.current = DIRECTIONS.LEFT;
        break;
      case DIRECTIONS.RIGHT:
        if (prev !== DIRECTIONS.LEFT) direction.current = DIRECTIONS.RIGHT;
        break;
    }
  };

  useEffect(() => {
    if (grid.current) renderGrid();
  }, [updateGrid]);

  const initGrid = () => {
    const newGrid = [];
    for (let i = 0; i < GRID_SIZE; i++) {
      const row = [];
      for (let j = 0; j < GRID_SIZE; j++) {
        row.push(new LinkedListNode(i, j));
      }
      newGrid.push(row);
    }
    initHead(newGrid);
    initFood(newGrid);
    return newGrid;
  };

  const initHead = (newGrid) => {
    const mid = Math.floor(GRID_SIZE / 2);
    const newHead = newGrid[mid][mid];
    newHead.setAsHead(NODE_STATES.SNAKE, 1);
    head.current = newHead;
    tail.current = newHead;
  };

  const initFood = (newGrid) => {
    const mid = Math.floor(GRID_SIZE / 2);
    let row;
    let col;
    while (row !== mid && col !== mid) {
      row = Math.floor(Math.random() * GRID_SIZE);
      col = Math.floor(Math.random() * GRID_SIZE);
    }
    const node = newGrid[row][col];
    node.state = NODE_STATES.FOOD;
  };

  const renderGrid = () => {
    let newGridSquares = [];
    grid.current.forEach((rows, i) => {
      return rows.forEach((node, j) => {
        const key = `node-${i}-${j}`;
        newGridSquares.push(<Node key={key} state={node.state} />);
      });
    });
    setGridNodes(newGridSquares);
  };

  const updateHeadinGrid = () => {
    const curHead = head.current;
    const curGrid = grid.current;
    let row = curHead.row;
    let col = curHead.col;
    let score = curHead.score;

    switch (direction.current) {
      case DIRECTIONS.UP:
        row -= 1;
        break;
      case DIRECTIONS.DOWN:
        row += 1;
        break;
      case DIRECTIONS.LEFT:
        col -= 1;
        break;
      case DIRECTIONS.RIGHT:
        col += 1;
        break;
    }
    if (row < 0 || row >= GRID_SIZE || col < 0 || col >= GRID_SIZE) {
      // out of bounds
      resetGame('GAME OVER');
      return;
    }

    const newHead = curGrid[row][col];
    curHead.setNext(newHead);
    if (newHead.state === NODE_STATES.SNAKE) {
      // collide into body
      resetGame('GAME OVER');
      return;
    } else if (newHead.state === NODE_STATES.FOOD) {
      score += 1;
      if (score === maxScore) {
        resetGame('YOU WON! :)');
        return;
      }
      updateFoodInGrid();
    } else {
      updateTailInGrid();
    }
    newHead.setAsHead(NODE_STATES.SNAKE, score);
    head.current = newHead;
  };

  const updateTailInGrid = () => {
    const curTail = tail.current;
    const newTail = curTail.next;
    curTail.reset();
    tail.current = newTail;
  };

  const updateFoodInGrid = () => {
    // food can only be assigned to a square that is not occupied by snake
    const allowed = [];
    const curGrid = grid.current;
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        const node = curGrid[i][j];
        if (node.state === NODE_STATES.EMPTY) allowed.push(`${i},${j}`);
      }
    }
    const idxs = allowed[Math.floor(Math.random() * allowed.length)];
    const food = curGrid[idxs.split(',')[0]][idxs.split(',')[1]];
    food.state = NODE_STATES.FOOD;
  };

  const resetGame = (message) => {
    setMessage(message);
    setTimeout(() => {
      handleGameState(GAME_STATES.MENU);
    }, 3000);
    clearInterval(frameInterval.current);
  };

  return (
    <GridWrapper ref={ref}>
      {gridNodes}
      {message && <GameOver>{message}</GameOver>}
    </GridWrapper>
  );
});

export default SnakePlayComponent;
