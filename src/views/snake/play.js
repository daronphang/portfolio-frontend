import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { NODE_SIZES, GAME_STATES } from './models';
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
  if (state === NODE_STATES.EMPTY) return standardStyles.colorPrimary;
  else if (state === NODE_STATES.FOOD) return '#38E886';
  return '#4AE6E0';
};

const Node = styled.div.attrs((props) => ({
  style: {
    background: setNodeBackground(props.state),
  },
}))`
  ${mediaQuery(
    'ios',
    `
    width: ${NODE_SIZES.EXTRA_SMALL}rem;
    height: ${NODE_SIZES.EXTRA_SMALL}rem;
`
  )};
  ${mediaQuery(
    'android',
    `
    width: ${NODE_SIZES.EXTRA_SMALL}rem;
    height: ${NODE_SIZES.EXTRA_SMALL}rem;
`
  )};
  ${mediaQuery(
    'tablet',
    `
    width: ${NODE_SIZES.SMALL}rem;
    height: ${NODE_SIZES.SMALL}rem;
`
  )};
  ${mediaQuery(
    'laptop',
    `
    width: ${NODE_SIZES.MEDIUM}rem;
    height: ${NODE_SIZES.MEDIUM}rem;
`
  )};

  ${mediaQuery(
    'desktop',
    `
    width: ${NODE_SIZES.LARGE}rem;
    height: ${NODE_SIZES.LARGE}rem;
`
  )};
`;

export default function SnakePlayComponent({
  gridLength,
  difficulty,
  handleGameState,
}) {
  // states that do not need to trigger rerender of component
  // should not use React hooks for optimization
  const grid = useRef(null);
  const head = useRef(null);
  const tail = useRef(null);
  const direction = useRef(DIRECTIONS.RIGHT);
  const frameInterval = useRef(null);
  const maxScore = Math.pow(gridLength, 2);

  // requires rendering of DOM
  const [updateGrid, setUpdateGrid] = useState(false);
  const [gridNodes, setGridNodes] = useState(null);

  useEffect(() => {
    // initialization
    grid.current = initGrid();
    renderGrid();
    frameInterval.current = setInterval(() => {
      updateHeadinGrid();
      setUpdateGrid((prev) => !prev);
    }, difficulty.current);

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      clearInterval(frameInterval.current);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    let prev = direction.current;
    switch (event.key) {
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
    for (let i = 0; i < gridLength; i++) {
      const row = [];
      for (let j = 0; j < gridLength; j++) {
        row.push(new LinkedListNode(i, j));
      }
      newGrid.push(row);
    }
    initHead(newGrid);
    initFood(newGrid);
    return newGrid;
  };

  const initHead = (newGrid) => {
    const mid = Math.floor(gridLength / 2);
    const newHead = newGrid[mid][mid];
    newHead.setAsHead(NODE_STATES.SNAKE, 1);
    head.current = newHead;
    tail.current = newHead;
  };

  const initFood = (newGrid) => {
    const mid = Math.floor(gridLength / 2);
    let row;
    let col;
    while (row !== mid && col !== mid) {
      row = Math.floor(Math.random() * gridLength);
      col = Math.floor(Math.random() * gridLength);
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
    if (row < 0 || row >= gridLength || col < 0 || col >= gridLength) {
      // out of bounds
      handleGameState(GAME_STATES.GAMEOVER);
      clearInterval(frameInterval.current);
      return;
    }

    const newHead = curGrid[row][col];
    curHead.setNext(newHead);
    if (newHead.state === NODE_STATES.SNAKE) {
      // collide into body
      handleGameState(GAME_STATES.GAMEOVER);
      clearInterval(frameInterval.current);
      return;
    } else if (newHead.state === NODE_STATES.FOOD) {
      score += 1;
      if (score === maxScore) {
        handleGameState(GAME_STATES.WIN);
        clearInterval(frameInterval.current);
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
    for (let i = 0; i < gridLength; i++) {
      for (let j = 0; j < gridLength; j++) {
        const node = curGrid[i][j];
        if (node.state === NODE_STATES.EMPTY) allowed.push(`${i},${j}`);
      }
    }
    const idxs = allowed[Math.floor(Math.random() * allowed.length)];
    const food = curGrid[idxs.split(',')[0]][idxs.split(',')[1]];
    food.state = NODE_STATES.FOOD;
  };

  return <>{gridNodes}</>;
}
