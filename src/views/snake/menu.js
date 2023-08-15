import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { GAME_STATES, Menu, Header, Button } from './models';
import { DoublyLinkedListNode } from './node';

const CONTROLS = {
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
  SPACE: ' ',
};

const SnakeMenuComponent = forwardRef(function renderSnakeMenu(
  { handleGameState },
  ref
) {
  const [activeId, setActiveId] = useState('start-game');
  const activeNode = useRef(null);

  useEffect(() => {
    initNodes();
  }, []);

  useImperativeHandle(
    ref,
    () => {
      return { handleKeyDown };
    },
    []
  );

  const handleKeyDown = (key) => {
    let node = activeNode.current;
    switch (key) {
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
        else handleGameState(GAME_STATES.EXIT);
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
    <Menu ref={ref}>
      <Header>SNAKE</Header>
      <Button id="start-game" activeId={activeId}>
        START GAME
      </Button>
      <Button id="exit-game" activeId={activeId}>
        EXIT GAME
      </Button>
    </Menu>
  );
});

export default SnakeMenuComponent;
