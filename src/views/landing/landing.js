import React from 'react';
import styled from 'styled-components';

import { standardStyles, mediaQuery } from '../../utils/styles';
import Timeline from './timeline/timeline';
import Horizon from './horizon';
import ContactMe from './contact-me';
import Introduction from './introduction/introduction';

const Wrap = styled.div``;

export default function LandingPageComponent() {
  return (
    <Wrap>
      <Introduction />
      <Timeline></Timeline>
      <Horizon></Horizon>
      <ContactMe></ContactMe>
    </Wrap>
  );
}
