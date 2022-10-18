import React from 'react';
import styled from 'styled-components';

import Timeline from './timeline/timeline';
import UserContact from './contact';
import Introduction from './introduction/introduction';
import HorizonProfile from './horizon/profile';

const Wrap = styled.div``;

export default function LandingPageComponent() {
  return (
    <Wrap>
      <Introduction />
      <Timeline />
      <HorizonProfile />
      <UserContact />
    </Wrap>
  );
}
