import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import { mediaQuery, standardStyles } from '../../../utils/styles';

const Wrap = styled.div`
  position: relative;
  height: 150vh;
  width: 100%;
`;

// inner sticky wrap
const StickyWrap = styled.div`
  -webkit-position: sticky;
  position: sticky;

  ${mediaQuery(
    'ios',
    `
    top: calc(50% - 22.5rem);
    left: calc(50% - 18rem);
    height: 45rem;
    width: 36rem;
  `
  )};
  ${mediaQuery(
    'android',
    `
    top: calc(50% - 22.5rem);
    left: calc(50% - 23rem);
    height: 45rem;
    width: 46rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    top: calc(50% - 25rem);
    left: calc(50% - 27rem);
    height: 50rem;
    width: 54rem;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    top: calc(50% - 32.5rem);
    left: calc(50% - 38rem);
    height: 65rem;
    width: 76rem;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    top: calc(50% - 30rem);
    left: calc(50% - 57.5rem);
    height: 60rem;
    width: 115rem;
  `
  )};
`;

const Corner = styled.div.attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.65) * 100),
  },
}))`
  position: absolute;
  height: 130%;
  transition: 0.5s;

  ${mediaQuery(
    'ios',
    `
    width: 26rem;
    border: 0.3rem solid ${standardStyles.fontColorPrimary};
  `
  )};
  ${mediaQuery(
    'android',
    `
    width: 35rem;
    border: 0.3rem solid ${standardStyles.fontColorPrimary};
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    width: 40rem;
    border: 0.4rem solid ${standardStyles.fontColorPrimary};
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    width: 57rem;
    border: 0.4rem solid ${standardStyles.fontColorPrimary};
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    width: 88rem;
    border: 0.5rem solid ${standardStyles.fontColorPrimary};
  `
  )};
`;

const TopCorner = styled(Corner)`
  border-top: none;
  border-right: none;
  left: 10%;
  top: -30%;
`;

const BottomCorner = styled(Corner)`
  border-bottom: none;
  border-left: none;
  right: 10%;
  bottom: 0%;
  bottom: -30%;
`;

// for text, need specify line-height and height to remove
// extra white spacing at top and bottom of text
// needed if explicitly setting a font

const Heading = styled.span.attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.5) * 6),
    transform: `translateX(${Math.min(
      -100,
      -190 + (props.ratio || 0) * 140
    )}%)`,
  },
}))`
  position: absolute;
  transition: 0.5s;
  font-family: Devant Horgen;

  ${mediaQuery(
    'ios',
    `
    font-size: 5rem;
    top: 8rem;
    height: 4rem;
    line-height: 4rem;
  `
  )};
  ${mediaQuery(
    'android',
    `
    font-size: 6.5rem;
    top: 8.5rem;
    height: 4rem;
    line-height: 4rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    font-size: 7.5rem;
    top: 7.5rem;
    height: 6rem;
    line-height: 6rem;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    font-size: 10rem;
    top: 8rem;
    height: 7rem;
    line-height: 8rem;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    font-size: 13rem;
    top: 7rem;
    height: 9rem;
    line-height: 10rem;
  `
  )};
`;

const Square = styled.span.attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.6) * 20),
  },
}))`
  position: absolute;
  background: ${standardStyles.fontColorPrimary};
  transition: 0.5s;
  left: 53%;
  border-radius: 50%;

  ${mediaQuery(
    'ios',
    `
    height: 1rem;
    width: 1rem;
    top: 15rem;
  `
  )};
  ${mediaQuery(
    'android',
    `
    height: 1rem;
    width: 1rem;
    top: 15rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    height: 1.5rem;
    width: 1.5rem;
    top: 16.5rem;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    height: 2rem;
    width: 2rem;
    top: 18rem;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    height: 2rem;
    width: 2rem;
    top: 18rem;
  `
  )};
`;

const ZeroDigit = styled.span.attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.5) * 6),
    transform: `translateY(${Math.min(0, -100 + (props.ratio || 0) * 150)}%)`,
  },
}))`
  position: absolute;
  transition: 0.5s;
  font-family: Devant Horgen;
  font-size: 25rem;
  left: calc(53% + 3rem);

  ${mediaQuery(
    'ios',
    `
    font-size: 18rem;
    top: 4rem;
    left: calc(53% + 1.5rem);
    height: 13rem;
    line-height: 13rem;
  `
  )};
  ${mediaQuery(
    'android',
    `
    font-size: 18rem;
    top: 4rem;
    left: calc(53% + 1.5rem);
    height: 13rem;
    line-height: 13rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    font-size: 20rem;
    top: 4.2rem;
    left: calc(53% + 2rem);
    height: 14rem;
    line-height: 15rem;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    font-size: 25rem;
    top: 3rem;
    left: calc(53% + 3rem);
    height: 17rem;
    line-height: 18rem;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    font-size: 25rem;
    top: 3rem;
    left: calc(53% + 3rem);
    height: 17rem;
    line-height: 18rem;
  `
  )};
`;

const SecondDigit = styled(ZeroDigit).attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.6) * 20),
    transform: `translateY(${Math.min(0, -100 + (props.ratio || 0) * 150)}%)`,
  },
}))`
  ${mediaQuery(
    'ios',
    `
    left: calc(53% + 6.5rem);
  `
  )};
  ${mediaQuery(
    'android',
    `
    left: calc(53% + 6.5rem);
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    left: calc(53% + 7rem);
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    left: calc(53% + 9.5rem);
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    left: calc(53% + 9.5rem);
  `
  )};
`;

const Content = styled.span.attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.6) * 20),
  },
}))`
  position: absolute;
  text-align: left;
  transition: 0.5s;

  ${mediaQuery(
    'ios',
    `
    width: 25rem;
    left: calc(50% - 12.5rem);
    font-size: ${standardStyles.fontSizeVerySmall};
    top: 42%;
  `
  )};
  ${mediaQuery(
    'android',
    `
    width: 32rem;
    left: calc(50% - 16rem);
    font-size: ${standardStyles.fontSizeSmall};
    top: 42%;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    width: 40rem;
    left: calc(50% - 20rem);
    font-size: ${standardStyles.fontSizeSmall};
    top: 42%;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    width: 55rem;
    left: calc(50% - 27.5rem);
    font-size: ${standardStyles.fontSizeMedium};
    top: 37%;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    width: 80rem;
    left: calc(50% - 40rem);
    font-size: ${standardStyles.fontSizeMedium};
    top: 42%;
  `
  )};
`;

const threshold = [];
for (let i = 0.5; i < 1; i += 0.01) {
  threshold.push(i);
}

export default function TimelineContent({ id, heading, content, digit }) {
  const { ref, inView, entry } = useInView({
    threshold,
  });

  return (
    <Wrap ref={ref}>
      <StickyWrap id="content">
        <TopCorner ratio={entry?.intersectionRatio} />
        <BottomCorner ratio={entry?.intersectionRatio} />
        <Heading ratio={entry?.intersectionRatio}>{heading}</Heading>
        <Square ratio={entry?.intersectionRatio} />
        <ZeroDigit ratio={entry?.intersectionRatio}>0</ZeroDigit>
        <SecondDigit ratio={entry?.intersectionRatio}>{digit}</SecondDigit>
        <Content ratio={entry?.intersectionRatio}>{content}</Content>
      </StickyWrap>
    </Wrap>
  );
}
