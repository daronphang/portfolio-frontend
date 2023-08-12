import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import useScrollContent from '../../../hooks/useScrollContent';
import { standardStyles, mediaQuery } from '../../../utils/styles';
import backgroundImg from '../../../images/intro-background.jpg';
import TypingContent from './typing-content';

/*
Scrolling is only enabled after entrance is completed.
For background image, as it takes 100% height, need to set as fixed first

Idea is to display background image that is scrollable and set it to 'fixed'
after scrolling certain amount (20vh). To prevent image from starting at top, need to
deduct top position by 20vh. Set as 'absolute' so as to not take space.

bgImg position: on page load -> fixed -> entrance done -> absolute -> fixed
*/

const Wrap = styled.div``;

const BgdImg = styled.img.attrs((props) => ({
  style: {
    position:
      props.content === 100 ? 'fixed' : props.show ? 'absolute' : 'fixed',
    top: props.content === 100 ? `${-0.2 * window.innerHeight}px` : 0,
    opacity: Math.max(
      0,
      !props.ratio ? 1 : props.ratio >= 0.5 ? 1 : props.ratio * 2 - 0.2
    ),
  },
}))`
  z-index: -1;
  object-fit: cover;

  ${mediaQuery(
    'ios',
    `
    max-width: 100%;
    min-height: ${window.innerHeight}px;
  `
  )};
  ${mediaQuery(
    'android',
    `
    max-width: 100%;
    min-height: ${window.innerHeight}px;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    max-width: 100%;
    min-height: ${window.innerHeight}px;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    max-width: 100%;
    min-height: 100vh;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    max-width: 100%;
    min-height: 100vh;
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
  font-weight: 500;
  color: ${standardStyles.fontColorPrimary};

  ${mediaQuery(
    'ios',
    `
    top: 60%;
    right: 0%;
    width: 25rem;
    font-size: ${standardStyles.fontSizeSmall};
  `
  )};
  ${mediaQuery(
    'android',
    `
    top: 60%;
    right: 0%;
    width: 25rem;
    font-size: ${standardStyles.fontSizeMedium};
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    top: 60%;
    right: 0%;
    width: 25rem;
    font-size: ${standardStyles.fontSizeMedium};
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    top: 60%;
    right: 3%;
    width: 48rem;
    font-size: ${standardStyles.fontSizeLarge};
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    top: 60%;
    right: 0%;
    width: 50rem;
    font-size: ${standardStyles.fontSizeLarge};
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
        show={show}
        src={backgroundImg}
        ratio={entry?.intersectionRatio}
        content={scrollContent}
      />
      <BgdHideWhiteSpace />
      {show && <TypingContent />}
      <Content>
        I am a process engineer transitioning into a software developer. Scroll
        down to view my coding journey, or send me a message.
      </Content>
      <Placeholder ref={ref}></Placeholder>
      <Marker ref={scrollRef} />
    </Wrap>
  );
}
