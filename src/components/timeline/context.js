import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import { mediaQuery, standardStyles } from '../../utils/styles';

const ContentBounds = styled.div`
  position: relative;
  height: 110vh;
  width: 100vw;
`;

const ContentWrap = styled.div`
  -webkit-position: sticky;
  position: sticky;
  left: 0;

  ${mediaQuery(
    'mobile',
    `
    top: 30%;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    top: 30%;
  `
  )};
  ${mediaQuery(
    'desktop',
    `
    top: 35%;
  `
  )};
`;

const Horizontal = styled.span.attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.7) * 4.5),
    transform: `translateX(${Math.min(0, -80 + (props.ratio || 0) * 80)}%)`,
  },
}))`
  position: absolute;
  height: 0.5vh;
  width: 50vw;
  background: #ffffff;
  top: 0;
  margin-top: -10vh;
  left: 50%;
  margin-left: -32vw;
  transition: 0.5s;
`;

const Heading = styled.span.attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.7) * 4.5),
    transform: `translateX(${Math.min(-120, -190 + (props.ratio || 0) * 75)}%)`,
  },
}))`
  position: absolute;
  transition: 0.5s;
  font-family: Arame;

  ${mediaQuery(
    'mobile',
    `
    font-size: ${standardStyles.fontSizeLargeMobile};
    margin-top: 2.5rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    font-size: 4vh;
    margin-top: 5vh;
  `
  )};
  ${mediaQuery(
    'desktop',
    `
    font-size: 4vh;
    margin-top: 5vh;
  `
  )};
`;

const Square = styled.span.attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.5) * 4),
  },
}))`
  position: absolute;
  background: #ffffff;
  transition: 0.5s;

  ${mediaQuery(
    'mobile',
    `
    height: ${standardStyles.fontSizeMediumMobile};
    width: ${standardStyles.fontSizeMediumMobile};
    margin-top: 5.5rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    height: 2vh;
    width: 2vh;
    margin-top: 12.5vh;
  `
  )};
  ${mediaQuery(
    'desktop',
    `
    height: 2vh;
    width: 2vh;
    margin-top: 12.5vh;
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
  font-family: Arame;

  ${mediaQuery(
    'mobile',
    `

    font-size: 10rem;
    margin-left: 1.7rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    font-size: 20vh;
    margin-left: 2vh;
  `
  )};
  ${mediaQuery(
    'desktop',
    `
    font-size: 20vh;
    margin-left: 2vh;
  `
  )};
`;

const SecondDigit = styled(ZeroDigit).attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.6) * 4),
    transform: `translateY(${Math.min(0, -100 + (props.ratio || 0) * 120)}%)`,
  },
}))`
  font-family: Arame;

  ${mediaQuery(
    'mobile',
    `
    margin-left: 7.3rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    margin-left: 13vh;
  `
  )};
  ${mediaQuery(
    'desktop',
    `
    margin-left: 13vh;
  `
  )};
`;

const Content = styled.span.attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.7) * 5),
  },
}))`
  position: absolute;
  width: 75vw;
  min-height: 25vh;
  text-align: left;
  font-family: JetBrains;
  font-weight: 300;
  left: 50%;
  margin-left: -37.5vw;
  transition: 0.5s;

  ${mediaQuery(
    'mobile',
    `
    font-size: ${standardStyles.fontSizeSmallMobile};
    word-spacing: -0.5rem;
    line-height: 1.7rem;
    margin-top: 10rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    font-size: 2.2vh;
    word-spacing: -0.5vh;
    line-height: 2.6vh;
    margin-top: 20vh;
  `
  )};
  ${mediaQuery(
    'desktop',
    `
    font-size: 2.2vh;
    word-spacing: -0.5vh;
    line-height: 2.6vh;
    margin-top: 20vh;
  `
  )};
`;

export default function TimelineContext({ id, heading, content, digit }) {
  const { ref, inView, entry } = useInView({
    threshold: [0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9],
  });

  return (
    <ContentBounds ref={ref}>
      <ContentWrap id="content">
        <Horizontal ratio={entry?.intersectionRatio} />
        <Square ratio={entry?.intersectionRatio} />
        <ZeroDigit ratio={entry?.intersectionRatio}>0</ZeroDigit>
        <Heading ratio={entry?.intersectionRatio}>{heading}</Heading>
        <SecondDigit ratio={entry?.intersectionRatio}>{digit}</SecondDigit>
        <Content ratio={entry?.intersectionRatio}>{content}</Content>
      </ContentWrap>
    </ContentBounds>
  );
}
