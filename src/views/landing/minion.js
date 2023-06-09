import React, { useState } from 'react';
import styled from 'styled-components';
import Minion from '../../components/minion';
import { standardStyles, mediaQuery } from '../../utils/styles';

const Wrap = styled.div`
  position: relative;
  background: ${standardStyles.colorQuinary};
  height: 40rem;
  width: 100%;
`;

const MinionWrap = styled.div`
  position: absolute;
  width: auto;
  height: 100%;
  top: 45%;

  ${mediaQuery(
    'mobile',
    `
    left: calc(50% - 20rem);
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    left: calc(45% - 20rem);
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    left: calc(40% - 20rem);
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    left: calc(45% - 20rem);
  `
  )};
`;

const Text = styled.div`
  position: absolute;
  height: 100%;

  ${mediaQuery(
    'mobile',
    `
    top: 30%;
    left: 50%;
    font-size: ${standardStyles.fontSizeSmall};
    width: 20rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    top: 35%;
    left: 45%;
    width: 28rem;
    font-size: ${standardStyles.fontSizeSmall};
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    top: 35%;
    left: 40%;
    width: 40rem;
    font-size: ${standardStyles.fontSizeNormal};
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    top: 35%;
    left: 45%;
    width: 60rem;
    font-size: ${standardStyles.fontSizeNormal};
  `
  )};
`;

export default function LandingMinion() {
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  const handleMouseMove = (event) => {
    setClientX(event.clientX);
    setClientY(event.clientY);
  };

  return (
    <Wrap onMouseMove={handleMouseMove}>
      <MinionWrap>
        <Minion clientX={clientX} clientY={clientY} />
      </MinionWrap>
      <Text>
        Meet Jack, my hardworking minion who labors day and night, constantly
        scraping on Stack Overflow for answers when a code unexpectedly breaks
        (else he cannot sleep). He is also quite conscious when people invade
        his space.
      </Text>
    </Wrap>
  );
}
