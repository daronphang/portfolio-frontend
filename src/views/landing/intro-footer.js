import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import { standardStyles } from '../../utils/styles';

const WrapBounds = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  background: rgb(20, 20, 20);
`;

const Footer = styled.div`
  position: absolute;
  font-size: ${standardStyles.fontSizeLarge};
  left: 0;
  top: 0;
  width: 100%;
  background: rgb(20, 20, 20);
  text-align: center;
  transition: 0.5s;
  color: white;
  padding: 30vh 0 30vh 0;
  z-index: 2;
`;

const Span = styled.span.attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.7) * 4),
  },
}))``;

export default function IntroFooter() {
  const { ref, inView, entry } = useInView({
    threshold: [0.7, 0.75, 0.8, 0.85, 0.9],
  });
  return (
    <WrapBounds>
      <Footer ref={ref}>
        <Span ratio={entry?.intersectionRatio}>
          Scroll down to start my journey.
        </Span>
      </Footer>
    </WrapBounds>
  );
}
