import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import tvBackground from '../../../images/tv-background.jpg';

import TypeWriter from '../../../components/typewriter';
import HorizonProfile from './profile';
import { mediaQuery, standardStyles } from '../../../utils/styles';
import useScrollContent from '../../../hooks/useScrollContent';

const Wrap = styled.div`
  position: relative;
  width: 100%;
  background: ${standardStyles.colorPrimary};
`;

const ZoomBounds = styled.div`
  position: relative;
  height: 200vh;
`;

const ZoomWrap = styled.div.attrs((props) => ({
  style: {
    opacity:
      props.scroll < 90
        ? (props.scroll / 100 - 0.1) * 3.5
        : ((100 - props.scroll) / 100) * 2,
    transform: `scale(${1 + Math.max(0, (props.scroll / 100 - 0.6) * 2.5)})`,
  },
}))`
  position: sticky;
  transition: 0.5s;
  height: 100vh;
  top: 0%;
`;

const BgdImg = styled.img`
  position: absolute;
  object-fit: cover;

  ${mediaQuery(
    'mobile',
    `
    width: 100%;
    height: 100%;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    width: 100%;
    height: 100%;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    height: 100%;
    width: 100%;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    height: auto;
    width: 100%;
  `
  )};
`;

const TerminalWrap = styled.div`
  position: absolute;
  width: 100%;
  color: ${standardStyles.fontColorPrimary};
  text-align: center;

  ${mediaQuery(
    'mobile',
    `
    top: 60vmax;
    font-size: 1.2vmax;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    top: 60vmax;
    font-size: 1.2vmax;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    top: 40vmax;
    font-size: 0.7vmax;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    top: 40vmax;
    font-size: 0.7vmax;
  `
  )};
`;

const threshold = [];
for (let i = 0.1; i < 1; i += 0.01) {
  threshold.push(i);
}

export default function Horizon() {
  const [scrollRef, scrollContent] = useScrollContent(false);
  // const { scrollAmount } = useScrollAmount('about');
  const { ref, inView, entry } = useInView({
    threshold,
  });

  return (
    <Wrap id="about">
      <ZoomBounds ref={scrollRef}>
        <ZoomWrap scroll={scrollContent}>
          <BgdImg src={tvBackground} />
          {scrollContent > 30 && (
            <TerminalWrap>
              <TypeWriter styles={{ duration: 2, steps: 26 }}>
                Scroll down to continue...
              </TypeWriter>
            </TerminalWrap>
          )}
        </ZoomWrap>
      </ZoomBounds>
      <HorizonProfile />
    </Wrap>
  );
}
