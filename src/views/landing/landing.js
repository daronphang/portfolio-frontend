import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Timeline from './timeline/timeline';
import UserContact from './contact';
import Introduction from './introduction/introduction';
import Horizon from './horizon/horizon';
import LandingMinion from './minion';
import Projects from './projects/projects';
import Entrance from './entrance';

const Wrap = styled.div.attrs((props) => ({
  style: {
    overflowY: props.enableScroll ? 'visible' : 'hidden',
    height: props.enableScroll ? '100%' : `min(${window.innerHeight}px, 100vh)`,
  },
}))`
  width: 100%;
`;

export default function LandingPageComponent() {
  const [enableScroll, setEnableScroll] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEnableScroll(true);
    }, 4000);
  }, []);

  return (
    <Wrap enableScroll={enableScroll}>
      <Entrance />
      <Introduction />
      <Projects />
      <Timeline />
      <LandingMinion />
      <Horizon />
      <UserContact />
    </Wrap>
  );
}
