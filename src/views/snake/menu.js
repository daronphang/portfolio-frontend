import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { GAME_STATES, Menu, Header, Button } from './models';
import { DoublyLinkedListNode } from './node';

const CONTROLS = {
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
  SPACE: ' ',
};

export default function SnakeMenuComponent({ handleGameState }) {
  const [activeId, setActiveId] = useState('start-game');
  const activeNode = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    initNodes();

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    let node = activeNode.current;
    switch (event.key) {
      case CONTROLS.UP:
        node = node.prev;
        setActiveId(node.id);
        activeNode.current = node;
        break;
      case CONTROLS.DOWN:
        node = node.next;
        setActiveId(node.id);
        activeNode.current = node;
        break;
      case CONTROLS.SPACE:
        if (activeNode.current.id === 'start-game')
          handleGameState(GAME_STATES.DIFFICULTY);
        else navigate('/');
        break;
    }
  };

  const initNodes = () => {
    const start = new DoublyLinkedListNode('start-game');
    const exit = new DoublyLinkedListNode('exit-game');
    start.next = exit;
    start.prev = exit;
    exit.next = start;
    exit.prev = start;
    activeNode.current = start;
  };

  return (
    <Menu>
      <Header>SNAKE</Header>
      <Button id="start-game" activeId={activeId}>
        START GAME
      </Button>
      <Button id="exit-game" activeId={activeId}>
        EXIT GAME
      </Button>
    </Menu>
  );
}
