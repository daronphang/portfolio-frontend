import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import { standardStyles, mediaQuery } from '../../utils/styles';
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
  ${mediaQuery(
    'mobile',
    `
  font-size: ${standardStyles.fontSizeMediumMobile};
  padding: 3rem;
  padding-top: 12rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
  font-size: ${standardStyles.fontSizeSmallTablet};
  padding: 5rem;
  padding-top: 10rem;
  `
  )};
  ${mediaQuery(
    'desktop',
    `
  font-size: ${standardStyles.fontSizeMediumDesktop};
  padding: 10vh;
  `
  )};
  font-family: Arame;
`;

const Footer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: ${standardStyles.fontSizeVerySmall};
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
  margin-bottom: 0.5vh;
`;

export default function LandingPageComponent() {
  const { ref, inView, entry } = useInView({
    threshold: [0.4, 0.45, 0.5, 0.55, 0.6],
  });

  return (
    <Wrap>
      <Introduction id="introduction" ref={ref}>
        <Name>MY NAME IS DARON.</Name>
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
