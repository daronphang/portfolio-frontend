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
  top: calc(50% - 30rem);
  left: calc(50% - 57.5rem);
  height: 60rem;
  width: 115rem;
`;

const Corner = styled.div.attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.7) * 4.5),
  },
}))`
  position: absolute;
  height: 12rem;
  width: 12rem;
  transition: 0.5s;
`;

const TopCorner = styled(Corner)`
  border-top: 1.5rem solid ${standardStyles.fontColorPrimary};
  border-left: 1.5rem solid ${standardStyles.fontColorPrimary};
  left: 10%;
`;

const BottomCorner = styled(Corner)`
  border-bottom: 1.5rem solid ${standardStyles.fontColorPrimary};
  border-right: 1.5rem solid ${standardStyles.fontColorPrimary};
  right: 10%;
  bottom: 0%;
`;

// for text, need specify line-height and height to remove
// extra white spacing at top and bottom of text
// needed if explicitly setting a font

const Heading = styled.span.attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.7) * 4.5),
    transform: `translateX(${Math.min(-120, -190 + (props.ratio || 0) * 75)}%)`,
  },
}))`
  position: absolute;
  transition: 0.5s;
  font-family: Arame;
  font-size: ${standardStyles.fontSizeVeryLarge};
  top: 10rem;
  height: 3rem;
  line-height: 3rem;
`;

const Square = styled.span.attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.5) * 4),
  },
}))`
  position: absolute;
  background: ${standardStyles.fontColorPrimary};
  transition: 0.5s;
  height: 2rem;
  width: 2rem;
  top: 18rem;
`;

const ZeroDigit = styled.span.attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.5) * 3),
    transform: `translateY(${Math.min(0, -100 + (props.ratio || 0) * 140)}%)`,
  },
}))`
  position: absolute;
  transition: 0.5s;
  top: 2rem;
  height: 19rem;
  line-height: 19rem;
  font-family: Arame;
  font-size: 25rem;
  left: calc(50% + 2.5rem);
`;

const SecondDigit = styled(ZeroDigit).attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.6) * 4),
    transform: `translateY(${Math.min(0, -100 + (props.ratio || 0) * 120)}%)`,
  },
}))`
  left: calc(50% + 17rem);
`;

const Content = styled.span.attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.7) * 5),
  },
}))`
  position: absolute;
  width: 80rem;
  text-align: left;
  left: calc(50% - 40rem);
  transition: 0.5s;
  top: 42%;
  font-size: ${standardStyles.fontSizeMedium};
`;

export default function TimelineContent({ id, heading, content, digit }) {
  const { ref, inView, entry } = useInView({
    threshold: [0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9],
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
