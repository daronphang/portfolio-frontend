import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { standardStyles, mediaQuery } from '../../utils/styles';

// effect to create is rhombus that expands into view

const Wrap = styled.div``;

const Square = styled.div.attrs((props) => ({
  style: {
    width: `${props.size}vw`,
    height: `${props.size}vh`,
    borderLeft: `calc(50vw - ${props.size / 2}vw) solid ${
      standardStyles.colorPrimary
    }`,
    borderRight: `calc(50vw - ${props.size / 2}vw) solid ${
      standardStyles.colorPrimary
    }`,
    borderTop: `calc(50vh - ${props.size / 2}vh) solid ${
      standardStyles.colorPrimary
    }`,
    borderBottom: `calc(50vh - ${props.size / 2}vh) solid ${
      standardStyles.colorPrimary
    }`,
  },
}))`
  position: absolute;
  background: transparent;
  z-index: 10;
`;

const Text = styled.div`
  position: absolute;
  z-index: 11;
  color: ${standardStyles.fontColorPrimary};
  font-family: Devant Horgen;
  font-size: 10rem;
  text-align: center;
  width: 100%;
  top: calc(50% - 5rem);
`;

const Texts = ['WELCOME', 'TO', 'DARON', 'PHANG'];

export default function Entrance() {
  const [size, setSize] = useState(0);
  const [text, setText] = useState(null);
  const [hideSquare, setHideSquare] = useState(false);
  const [hideText, setHideText] = useState(false);

  const expandSquare = (v) => {
    setTimeout(() => {
      setSize(v);
    }, 10 + v * 10);
  };

  const changeText = (v, i) => {
    setTimeout(() => {
      setText(v);
    }, i * 250);
  };

  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      changeText(Texts[i], i);
    }

    setTimeout(() => {
      for (let i = 0; i <= 100; i++) {
        expandSquare(i);
      }
      setHideText(true);
    }, [3000]);
  }, []);

  useEffect(() => {
    if (size === 100) setHideSquare(true);
  }, [size]);
  return (
    <Wrap>
      {!hideText && <Text>{text}</Text>}
      {!hideSquare && <Square size={size} />}
    </Wrap>
  );
}
