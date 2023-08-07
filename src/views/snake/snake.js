import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { LinkedListNode } from './linked-list-node';
import { standardStyles, mediaQuery } from '../../utils/styles';

const GRID_LENGTH = 40;
const GRID_SIZES = {
  SMALL: 1,
  MEDIUM: 1.5,
  LARGE: 2,
};
const GRID_STATES = {
  EMPTY: null,
  FOOD: 'FOOD',
  SNAKE: 'SNAKE',
};
const DIRECTIONS = {
  LEFT: 'ArrowLeft',
  UP: 'ArrowUp',
  RIGHT: 'ArrowRight',
  DOWN: 'ArrowDown',
  SPACE: ' ',
};
const GAME_STATES = {
  PENDING: 'PENDING',
  START: 'START',
  WIN: 'WIN',
  LOSE: 'LOSE',
};
const DIFFICULTY = {
  EASY: 500,
  MEDIUM: 250,
  HARD: 50,
};

const setBackground = (state) => {
  if (state === GRID_STATES.EMPTY) return standardStyles.colorPrimary;
  else if (state === GRID_STATES.FOOD) return '#38E886';
  return '#4AE6E0';
};

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${standardStyles.colorPrimary};
`;

const GridWrapper = styled.div`
  position: relative;
  display: grid;
  width: calc(${GRID_LENGTH * GRID_SIZES.MEDIUM}rem);
  grid-template-columns: repeat(${GRID_LENGTH}, ${GRID_SIZES.MEDIUM}rem);
  grid-template-rows: repeat(${GRID_LENGTH}, ${GRID_SIZES.MEDIUM}rem);
  left: calc(50% - ${(GRID_LENGTH / 2) * GRID_SIZES.MEDIUM}rem);
  top: calc(50% - ${(GRID_LENGTH / 2) * GRID_SIZES.MEDIUM}rem);
  border: 0.5rem solid ${standardStyles.fontColorPrimary};
`;

const Square = styled.div.attrs((props) => ({
  style: {
    background: setBackground(props.state),
  },
}))`
  width: ${GRID_SIZES.MEDIUM}rem;
  height: ${GRID_SIZES.MEDIUM}rem;
`;

export default function SnakeComponent() {
  // states that do not need to trigger rerender of component
  // should not use React hooks for optimization
  const grid = useRef(null);
  const head = useRef(null);
  const tail = useRef(null);
  const direction = useRef(DIRECTIONS.RIGHT);
  const frameInterval = useRef(null);

  // requires rendering of DOM
  const [updateGrid, setUpdateGrid] = useState(false);
  const [gridSquares, setGridSquares] = useState(null);
  const [gameState, setGameState] = useState(GAME_STATES.PENDING);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (grid.current) renderGrid();
  }, [updateGrid]);

  useEffect(() => {
    switch (gameState) {
      case GAME_STATES.START:
        grid.current = initGrid();
        renderGrid();
        frameInterval.current = setInterval(() => {
          updateHeadinGrid();
          setUpdateGrid((prev) => !prev);
        }, DIFFICULTY.HARD);
        break;
      case GAME_STATES.WIN:
        clearInterval(frameInterval.current);
        break;
      case GAME_STATES.LOSE:
        clearInterval(frameInterval.current);
        break;
      case GAME_STATES.PENDING:
        break;
    }
  }, [gameState]);

  const handleKeyDown = (event) => {
    // if user presses the opposite direction, it will continue
    // in the prev direction
    let cur = direction.current;
    switch (event.key) {
      case DIRECTIONS.UP:
        if (cur !== DIRECTIONS.DOWN) cur = DIRECTIONS.UP;
        break;
      case DIRECTIONS.DOWN:
        if (cur !== DIRECTIONS.UP) cur = DIRECTIONS.DOWN;
        break;
      case DIRECTIONS.LEFT:
        if (cur !== DIRECTIONS.RIGHT) cur = DIRECTIONS.LEFT;
        break;
      case DIRECTIONS.RIGHT:
        if (cur !== DIRECTIONS.LEFT) cur = DIRECTIONS.RIGHT;
        break;
      case DIRECTIONS.SPACE:
        if (gameState !== GAME_STATES.START) setGameState(GAME_STATES.START);
        break;
    }
    direction.current = cur;
  };

  const initGrid = () => {
    const newGrid = [];
    for (let i = 0; i < GRID_LENGTH; i++) {
      const row = [];
      for (let j = 0; j < GRID_LENGTH; j++) {
        row.push(new LinkedListNode(i, j));
      }
      newGrid.push(row);
    }
    initHead(newGrid);
    initFood(newGrid);
    return newGrid;
  };

  const initHead = (newGrid) => {
    const mid = Math.floor(GRID_LENGTH / 2);
    const newHead = newGrid[mid][mid];
    newHead.setAsHead(GRID_STATES.SNAKE, 1);
    head.current = newHead;
    tail.current = newHead;
  };

  const initFood = (newGrid) => {
    const mid = Math.floor(GRID_LENGTH / 2);
    let row;
    let col;
    while (row !== mid && col !== mid) {
      row = Math.floor(Math.random() * GRID_LENGTH);
      col = Math.floor(Math.random() * GRID_LENGTH);
    }
    const node = newGrid[row][col];
    node.state = GRID_STATES.FOOD;
  };

  const renderGrid = () => {
    let newGridSquares = [];
    grid.current.forEach((rows, i) => {
      return rows.forEach((node, j) => {
        const key = `node-${i}-${j}`;
        newGridSquares.push(<Square key={key} state={node.state} />);
      });
    });
    setGridSquares(newGridSquares);
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
    if (row < 0 || row >= GRID_LENGTH || col < 0 || col >= GRID_LENGTH) {
      // out of bounds
      setGameState(GAME_STATES.LOSE);
      return;
    } else if (curGrid[row][col].state === GRID_STATES.SNAKE) {
      setGameState(GAME_STATES.LOSE);
      return;
    }

    const newHead = curGrid[row][col];
    curHead.setNext(newHead);

    if (newHead.state == GRID_STATES.FOOD) {
      // keep tail if snake eats food
      // update food
      score += 1;
      updateFoodInGrid();
    } else {
      updateTailInGrid();
    }
    newHead.setAsHead(GRID_STATES.SNAKE, score);
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
    for (let i = 0; i < GRID_LENGTH; i++) {
      for (let j = 0; j < GRID_LENGTH; j++) {
        const node = curGrid[i][j];
        if (node.state === GRID_STATES.EMPTY) allowed.push(`${i},${j}`);
      }
    }
    if (allowed.length === 0) {
      setGameState(GAME_STATES.WIN);
      return;
    }
    const idxs = allowed[Math.floor(Math.random() * allowed.length)];
    const food = curGrid[idxs.split(',')[0]][idxs.split(',')[1]];
    food.state = GRID_STATES.FOOD;
  };

  const startGame = () => {};
  const resetGame = () => {};

  return (
    <Wrapper>
      <GridWrapper>{gridSquares}</GridWrapper>
    </Wrapper>
  );
}
