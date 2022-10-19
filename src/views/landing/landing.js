import React from 'react';
import styled from 'styled-components';

import Timeline from './timeline/timeline';
import UserContact from './contact';
import Introduction from './introduction/introduction';
import Horizon from './horizon/horizon';
import LandingMinion from './minion';

const Wrap = styled.div``;

export default function LandingPageComponent() {
  return (
    <Wrap>
      <Introduction />
      <Timeline />
      <LandingMinion />
      <Horizon />
      <UserContact />
    </Wrap>
  );
}
