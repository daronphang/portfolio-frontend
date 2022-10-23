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
    overflow: props.overflow ? 'visible' : 'hidden',
    height: props.overflow ? '100%' : `min(${window.innerHeight}px, 100vh)`,
  },
}))``;

export default function LandingPageComponent() {
  const [overflow, setOverflow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOverflow(true);
    }, 4000);
  }, []);

  return (
    <Wrap overflow={overflow}>
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
