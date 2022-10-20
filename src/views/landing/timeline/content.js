import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import { mediaQuery, standardStyles } from '../../../utils/styles';

const Wrap = styled.div`
  position: relative;
  height: 110vh;
  width: 100%;
`;

// inner sticky wrap
const StickyWrap = styled.div`
  -webkit-position: sticky;
  position: sticky;

  ${mediaQuery(
    'mobile',
    `
    top: calc(50% - 22.5rem);
    left: calc(50% - 19rem);
    height: 45rem;
    width: 38rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    top: calc(50% - 25rem);
    left: calc(50% - 40rem);
    height: 50rem;
    width: 80rem;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    top: calc(50% - 30rem);
    left: calc(50% - 57.5rem);
    height: 60rem;
    width: 115rem;
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
    opacity: Math.min(1, ((props.ratio || 0) - 0.7) * 4.5),
  },
}))`
  position: absolute;
  height: 130%;
  transition: 0.5s;

  ${mediaQuery(
    'mobile',
    `
    width: 26rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    width: 60rem;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    width: 80rem;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    width: 80rem;
  `
  )};
`;

const TopCorner = styled(Corner)`
  border-bottom: 0.5rem solid ${standardStyles.fontColorPrimary};
  border-left: 0.5rem solid ${standardStyles.fontColorPrimary};
  left: 10%;
  top: -30%;
`;

const BottomCorner = styled(Corner)`
  border-top: 0.5rem solid ${standardStyles.fontColorPrimary};
  border-right: 0.5rem solid ${standardStyles.fontColorPrimary};
  right: 10%;
  bottom: 0%;
  bottom: -30%;
`;

// for text, need specify line-height and height to remove
// extra white spacing at top and bottom of text
// needed if explicitly setting a font

const Heading = styled.span.attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.7) * 4.5),
    transform: `translateX(${Math.min(
      -100,
      -190 + (props.ratio || 0) * 100
    )}%)`,
  },
}))`
  position: absolute;
  transition: 0.5s;
  font-family: Devant Horgen;
  height: 3rem;
  line-height: 3rem;

  ${mediaQuery(
    'mobile',
    `
    font-size: 5rem;
    top: 8rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    font-size: 10rem;
    top: 10rem;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    font-size: 13rem;
    top: 10rem;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    font-size: 13rem;
    top: 10rem;
  `
  )};
`;

const Square = styled.span.attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.5) * 4),
  },
}))`
  position: absolute;
  background: ${standardStyles.fontColorPrimary};
  transition: 0.5s;
  left: 53%;
  border-radius: 50%;

  ${mediaQuery(
    'mobile',
    `
    height: 1rem;
    width: 1rem;
    top: 15rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    height: 1rem;
    width: 1rem;
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
    opacity: Math.min(1, ((props.ratio || 0) - 0.5) * 3),
    transform: `translateY(${Math.min(0, -100 + (props.ratio || 0) * 140)}%)`,
  },
}))`
  position: absolute;
  transition: 0.5s;
  height: 19rem;
  line-height: 19rem;
  font-family: Devant Horgen;
  font-size: 25rem;
  left: calc(53% + 3rem);

  ${mediaQuery(
    'mobile',
    `
    font-size: 18rem;
    top: 1rem;
    left: calc(53% + 1.5rem);
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    font-size: 23rem;
    top: 1rem;
    left: calc(53% + 2rem);
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    font-size: 25rem;
    top: 2rem;
    left: calc(53% + 3rem);
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    font-size: 25rem;
    top: 2rem;
    left: calc(53% + 3rem);
  `
  )};
`;

const SecondDigit = styled(ZeroDigit).attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.6) * 4),
    transform: `translateY(${Math.min(0, -100 + (props.ratio || 0) * 120)}%)`,
  },
}))`
  ${mediaQuery(
    'mobile',
    `
    left: calc(53% + 6.5rem);
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    left: calc(53% + 8.5rem);
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
    opacity: Math.min(1, ((props.ratio || 0) - 0.7) * 5),
  },
}))`
  position: absolute;
  text-align: left;
  transition: 0.5s;
  top: 42%;

  ${mediaQuery(
    'mobile',
    `
    width: 25rem;
    left: calc(50% - 12.5rem);
    font-size: ${standardStyles.fontSizeVerySmall};
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    width: 50rem;
    left: calc(50% - 25rem);
    font-size: ${standardStyles.fontSizeSmall};
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    width: 80rem;
    left: calc(50% - 40rem);
    font-size: ${standardStyles.fontSizeMedium};
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    width: 80rem;
    left: calc(50% - 40rem);
    font-size: ${standardStyles.fontSizeMedium};
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
