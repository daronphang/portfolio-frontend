import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import tvBackground from '../../../images/tv-background.jpg';
import Minion from '../../../components/minion';
import TypeWriter from '../../../components/typewriter';
import HorizonProfile from './profile';
import { mediaSizes, standardStyles } from '../../../utils/styles';
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
    transform: `scale(${1 + Math.max(0, (props.scroll / 100 - 0.6) * 1.5)})`,
  },
}))`
  top: 0%;
  position: sticky;
  transition: 0.5s;
  height: 100vh;
`;

const BgdImg = styled.img`
  position: absolute;
  object-fit: cover;
  height: auto;
  width: 100%;
`;

const MinionWrap = styled.div`
  position: absolute;
  left: 60vmax;
  top: 41vmax;
`;

const TerminalWrap = styled.div`
  position: absolute;
  width: 100%;
  top: 40vmax;
  color: ${standardStyles.fontColorPrimary};
  font-size: 0.7vmax;
  text-align: center;
`;

const threshold = [];
for (let i = 0.1; i < 1; i += 0.01) {
  threshold.push(i);
}

export default function Horizon() {
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);
  const [scrollRef, scrollContent] = useScrollContent(false);
  // const { scrollAmount } = useScrollAmount('about');
  const { ref, inView, entry } = useInView({
    threshold,
  });

  const handleMouseMove = (event) => {
    setClientX(event.clientX);
    setClientY(event.clientY);
  };

  return (
    <Wrap id="about" onMouseMove={handleMouseMove}>
      <ZoomBounds ref={scrollRef}>
        <ZoomWrap scroll={scrollContent}>
          <BgdImg src={tvBackground} />
          <MinionWrap>
            <Minion clientX={clientX} clientY={clientY} />
          </MinionWrap>
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
