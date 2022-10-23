import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import useScrollContent from '../../../hooks/useScrollContent';
import { standardStyles, mediaQuery } from '../../../utils/styles';
import backgroundImg from '../../../images/intro-background.jpg';
import TypingContent from './typing-content';

/*
Idea is to display background image that is scrollable and set it to 'fixed'
after scrolling certain amount (20vh). To prevent image from starting at top, need to
deduct top position by 20vh. Set as 'absolute' so as to not take space.
*/

const Wrap = styled.div`
  ${mediaQuery(
    'mobile',
    `
`
  )};
  ${mediaQuery(
    'tablet',
    `
    position: relative;
`
  )};
  ${mediaQuery(
    'laptop',
    `
    position: relative;
`
  )};

  ${mediaQuery(
    'desktop',
    `
    position: relative;
`
  )};
`;

const BgdImg = styled.img.attrs((props) => ({
  style: {
    position: props.content === 100 ? 'fixed' : 'absolute',
    top: props.content === 100 ? `-20vh` : 0,
    opacity: Math.max(
      0,
      !props.ratio ? 1 : props.ratio >= 0.5 ? 1 : props.ratio * 2 - 0.2
    ),
  },
}))`
  z-index: -1;
  object-fit: cover;

  ${mediaQuery(
    'mobile',
    `
    width: 100%;
    height: 100vh;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    width: 100%;
    height: 100vh;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    width: 100%;
    height: 100vh;
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

const BgdHideWhiteSpace = styled.div`
  position: fixed;
  z-index: -2;
  height: 100%;
  width: 100%;
  opacity: 1;
  background: ${standardStyles.colorPrimary};
`;

const Marker = styled.div`
  width: 100%;
`;

const Placeholder = styled.div`
  width: 100%;
  height: 120vh;
`;

const Content = styled.div`
  position: absolute;
  top: 60%;
  right: 0%;
  font-weight: 500;
  color: ${standardStyles.fontColorPrimary};

  ${mediaQuery(
    'mobile',
    `
    width: 25rem;
    font-size: ${standardStyles.fontSizeMedium};
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    width: 37rem;
    font-size: ${standardStyles.fontSizeLarge};
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    width: 50rem;
    font-size: ${standardStyles.fontSizeVeryLarge};
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    width: 50rem;
    font-size: ${standardStyles.fontSizeVeryLarge};
  `
  )};
`;

const threshold = [];
for (let i = 0; i <= 0.51; i += 0.01) {
  threshold.push(i);
}

export default function Introduction() {
  const [show, setShow] = useState(false);
  const { ref, inView, entry } = useInView({
    threshold,
  });
  const [scrollRef, scrollContent] = useScrollContent(false);

  useEffect(() => {
    // display after entrance
    setTimeout(() => {
      setShow(true);
    }, 4000);
  }, []);

  return (
    <Wrap id="introduction">
      <BgdImg
        src={backgroundImg}
        ratio={entry?.intersectionRatio}
        content={scrollContent}
      />
      <BgdHideWhiteSpace />
      {show && <TypingContent />}
      <Content>
        I am a process engineer transitioning into a fullstack developer. Scroll
        down to view my coding journey, or send me a message.
      </Content>
      <Placeholder ref={ref}></Placeholder>
      <Marker ref={scrollRef} />
    </Wrap>
  );
}
