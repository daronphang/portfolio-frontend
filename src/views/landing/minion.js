import React, { useState } from 'react';
import styled from 'styled-components';
import Minion from '../../components/minion';
import { standardStyles } from '../../utils/styles';

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
  left: calc(45% - 20rem);
`;

const Text = styled.div`
  position: absolute;
  width: 60rem;
  top: 35%;
  left: 45%;
  height: 100%;
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
        (else he cannot sleep). He is also quite sensitive when people invade
        his space.
      </Text>
    </Wrap>
  );
}
