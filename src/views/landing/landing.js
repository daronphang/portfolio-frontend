import React from 'react';
import styled from 'styled-components';

import Timeline from './timeline/timeline';
import UserContact from './contact';
import Introduction from './introduction/introduction';
import Horizon from './horizon/horizon';

const Wrap = styled.div``;

export default function LandingPageComponent() {
  return (
    <Wrap>
      <Introduction />
      <Timeline />
      <Horizon />
      <UserContact />
    </Wrap>
  );
}
