import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import { standardStyles } from '../../utils/styles';
import AboutYourself from '../../components/typewriter/about-yourself';
import Timeline from '../../components/timeline/timeline';
import Horizon from './horizon';
import ContactMe from './contact-me';

const Wrap = styled.div``;

const Introduction = styled.div`
  box-sizing: border-box;
  position: relative;
  background: ${standardStyles.colorPrimary};
  height: 100vh;
  color: ${standardStyles.fontColorPrimary};
  padding: 10vh;
  font-size: ${standardStyles.fontSizeLarge};
  font-family: Arame;
`;

const Footer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: ${standardStyles.fontSizeSmall};
  width: 100%;
  text-align: center;
  transition: 0.5s;
  padding: 5vh 0 5vh 0;
  z-index: 2;
`;

const Span = styled.span.attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.4) * 4),
  },
}))`
  font-family: Arame;
`;

const Name = styled.div`
  font-family: Arame;
`;

export default function LandingPageComponent() {
  const { ref, inView, entry } = useInView({
    threshold: [0.4, 0.45, 0.5, 0.55, 0.6],
  });

  return (
    <Wrap>
      <Introduction id="introduction" ref={ref}>
        <Name>MY NAME IS DARON.</Name>
        <br />
        <AboutYourself></AboutYourself>
        <Footer>
          <Span ratio={entry?.intersectionRatio}>
            Scroll down to start my journey.
          </Span>
        </Footer>
      </Introduction>
      <Timeline></Timeline>
      <Horizon></Horizon>
      <ContactMe></ContactMe>
    </Wrap>
  );
}
