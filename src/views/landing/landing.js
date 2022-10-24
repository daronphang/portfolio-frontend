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
    overflow: props.enableScroll ? 'visible' : 'hidden',
    height: props.enableScroll ? '100%' : `min(${window.innerHeight}px, 100vh)`,
  },
}))``;

export default function LandingPageComponent() {
  const [enableScroll, setEnableScroll] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEnableScroll(true);
    }, 0);
  }, []);

  return (
    <Wrap enableScroll={enableScroll}>
      {/* <Entrance /> */}
      <Introduction />
      <Projects />
      <Timeline />
      <LandingMinion />
      <Horizon />
      <UserContact />
    </Wrap>
  );
}
