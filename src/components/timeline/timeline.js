import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import TimelineContext from './context';
import useScrollAmount from '../../hooks/useScrollAmount';
import { mediaQuery, standardStyles } from '../../utils/styles';

const Wrap = styled.div`
  position: relative;
  background: rgb(20, 20, 20);
  color: white;
  padding: 10vh 0 0 0;
  height: 680vh;
  font-family: Arame;
  text-align: center;
  min-width: 90rem;
`;

const StickyWrap = styled.div`
  -webkit-position: sticky;
  position: sticky;
  width: 100%;
  left: 50%;
  top: 35%;
`;

const Arrow = styled.span.attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.13) * 100),
    transform: `rotate(-45deg) translateX(${
      -150 + props.scroll * 4
    }%) translateY(${-400 + props.scroll * 4}%)`,
  },
}))`
  position: absolute;
  height: 10vh;
  width: 10vh;
  border-right: 1vh solid #ffffff;
  border-bottom: 1vh solid #ffffff;
  transition: 0.5s;

  ${mediaQuery(
    'mobile',
    `
    height: 5rem;
    width: 5rem;
    left: 10%;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    height: 10vh;
    width: 10vh;
    left: 50%;
  `
  )};
  ${mediaQuery(
    'desktop',
    `
    height: 10vh;
    width: 10vh;
    left: 50%;
  `
  )};
`;

const VerticalBar = styled.span.attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.13) * 100),
    transform: `translateY(${-100 + props.scroll * 2}%)`,
  },
}))`
  position: absolute;
  height: 30rem;
  width: 0.5rem;
  background: #ffffff;
  left: 50%;
  margin-left: 40rem;
  transition: 0.5s;
`;

const Bold = styled.span`
  font-weight: 400;
`;

export default function Timeline() {
  const { ref, inView, entry } = useInView({
    threshold: [
      0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12,
      0.13, 0.14, 0.15,
    ],
  });
  const { scrollAmount } = useScrollAmount('timeline');

  // put figures and numbers to work

  const firstContent = `
  I graduated in Chemical Engineering at Nanyang Technological University in 2018.
  It seemed appropriate and safe, to pursue something I studied, but that didn't work out.
  Instead, I landed my first career in Micron as a Process Engineer.
  Although it was a steep learning curve, I worked hard and took pride in my responsibilities.
  Authored a technical paper on a breakthrough solution that reduced process defects by 98% for a problem that was unresolved for 8 years, 
  optimized a coating recipe with 4% Cpk improvement and 55% recovery of baseline thickness performance, and many more.
  Through these projects, I gained strong expertise in problem-solving, data-mining and analysis.
  However, as I thought about the next chapter of my professional life, I yearned for something different.
  A career that I am passionate about and can create a meaningful impact to society.
  `;

  const secondContent = `
  This was when it first started; in January 2021, I was graced with an opportunity to work on scaling up a web application project at Micron, migrating from monolith to microservices.
  Programming was something that I always wanted to pick up but found it too difficult and abstract to put into practical use.
  Nonetheless, I was interested in giving a shot at it.
  Kickstarted my coding journey with Python Flask.
  `;

  const thirdContent = `
  An evolving world without limits, with endless opportunities and applications, incorporating creativity and problem solving.
  Behind the scenes, programming has catalyzed societal and technological advancements.
  We are hopelessly dependent on it.
  The monumental impact programming can create pigued my interest and I delved into it. 
  Subsequently, I dedicated many hours building foundational knowledge in vanilla Python, Javscript, CSS, HTML and SQL.
  Udemy was exceptionally helpful.
  `;

  const fourthContent = `
  Knowing vanilla was important, but I wanted to expand my horizon and take advantage of the many open-sourced frameworks and libraries that have been painstakingly developed and tested by the coding community.
  I learned Bootstrap, React, Angular, NodeJS, ExpressJS, Gin, Celery, MongoDB, Docker.
  Picked up Golang and familiarized with Linux OS along the way.
  The countless documentations and articles were overwheming. 
  To make digesting of the information easier, I created a library to document my learnings, drawing understanding from different sources.
  `;

  const fifthContent = `
  To put my theory knowledge into practice, I worked on multiple mock fullstack projects, including building a shopping app platform and stock screener.
  I explored working with CSS, Leetcode for DSA, and deep dived into OOP and design patterns, APIs, software architectures, and networking.
  At Micron, I completed the web application migration to microservices.
  This platform averaged 366 requests daily, automating the work of engineers across Micron sites globally. 
  Fullstack development calls to my passions, and I am constantly grabbing onto any other langauges, frameworks or principles that I can integrate into my coding.
  `;

  const sixthContent = `
  My journey has only started.
  There is still a sea of unexplored territories, and I have only just scratched the surface.
  Moving forward, I am looking for my next adventure.
  `;

  return (
    <Wrap ref={ref} id="timeline">
      <StickyWrap>
        <Arrow ratio={entry?.intersectionRatio} scroll={scrollAmount} />
        {/* <VerticalBar ratio={entry?.intersectionRatio} scroll={scrollAmount} /> */}
      </StickyWrap>
      <TimelineContext heading="prelude" digit={0} content={firstContent} />
      <TimelineContext heading="virgin" digit={1} content={secondContent} />
      <TimelineContext heading="foundation" digit={2} content={thirdContent} />
      <TimelineContext
        heading="exploration"
        digit={3}
        content={fourthContent}
      />
      <TimelineContext heading="practice" digit={4} content={fifthContent} />
      <TimelineContext heading="present" digit={5} content={sixthContent} />
    </Wrap>
  );
}
