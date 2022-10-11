import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const ContentBounds = styled.div`
  position: relative;
  height: 110vh;
  width: 100vw;
`;

const ContentWrap = styled.div`
  -webkit-position: sticky;
  position: sticky;
  left: 0;
  top: 35%;
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
  font-size: 4vh;
  margin-top: 5vh;
  transition: 0.5s;
  font-family: Arame;
`;

const Square = styled.span.attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.5) * 2),
  },
}))`
  position: absolute;
  background: #ffffff;
  height: 2vh;
  width: 2vh;
  margin-top: 12.5vh;
  transition: 0.5s;
`;

const ZeroDigit = styled.span.attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.5) * 3),
    transform: `translateY(${Math.min(0, -100 + (props.ratio || 0) * 140)}%)`,
  },
}))`
  position: absolute;
  font-size: 20vh;
  margin-left: 2vh;
  transition: 0.5s;
  font-family: Arame;
`;

const SecondDigit = styled(ZeroDigit).attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.6) * 4),
    transform: `translateY(${Math.min(0, -100 + (props.ratio || 0) * 120)}%)`,
  },
}))`
  margin-left: 13vh;
  font-family: Arame;
`;

const Content = styled.span.attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.7) * 5),
  },
}))`
  position: absolute;
  width: 75vw;
  height: 25vh;
  text-align: left;
  font-size: 2vh;
  font-family: JetBrains;
  font-weight: 500;
  word-spacing: -0.5vh;
  line-height: 2.5vh;
  margin-top: 20vh;
  left: 50%;
  margin-left: -37.5vw;
  transition: 0.5s;
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
