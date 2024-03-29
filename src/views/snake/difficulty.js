import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { GAME_STATES, DIFFICULTY, Menu, Header, Button } from './models';
import { DoublyLinkedListNode } from './node';

const CONTROLS = {
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
  SPACE: ' ',
};

const SnakeDifficultyComponent = forwardRef(function renderSnakeDifficulty(
  { handleGameState, handleDifficulty },
  ref
) {
  const [activeId, setActiveId] = useState('medium-difficulty');
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
        handleDifficulty(node.val);
        handleGameState(GAME_STATES.START);
        break;
    }
  };

  const initNodes = () => {
    const easy = new DoublyLinkedListNode('easy-difficulty', DIFFICULTY.EASY);
    const medium = new DoublyLinkedListNode(
      'medium-difficulty',
      DIFFICULTY.MEDIUM
    );
    const hard = new DoublyLinkedListNode('hard-difficulty', DIFFICULTY.HARD);
    easy.next = medium;
    easy.prev = hard;
    medium.next = hard;
    medium.prev = easy;
    hard.next = easy;
    hard.prev = medium;
    activeNode.current = medium;
  };

  return (
    <Menu ref={ref}>
      <Header>SELECT DIFFICULTY</Header>
      <Button id="easy-difficulty" activeId={activeId}>
        EASY
      </Button>
      <Button id="medium-difficulty" activeId={activeId}>
        MEDIUM
      </Button>
      <Button id="hard-difficulty" activeId={activeId}>
        HARD
      </Button>
    </Menu>
  );
});

export default SnakeDifficultyComponent;
