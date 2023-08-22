import React from 'react';
import styled from 'styled-components';

import TimelineContent from './content';
import useScrollContent from '../../../hooks/useScrollContent';
import { mediaQuery, standardStyles } from '../../../utils/styles';

// each content is 150vh, total height is 6*150 + 10 (extra) = 910vh
const Wrap = styled.div`
  position: relative;
  background: ${standardStyles.colorPrimary};
  color: ${standardStyles.fontColorPrimary};
  height: 910vh;
  text-align: center;
`;

// outer sticky wrap
const StickyWrap = styled.div`
  -webkit-position: sticky;
  position: sticky;
  width: 100%;
  left: 50%;
  top: 0%;
`;

// translatesX when user scrolls
const ScrollContentWrap = styled.div.attrs((props) => ({
  style: {
    opacity: props.scroll > 10 && props.scroll < 100 ? 1 : 0,
  },
}))`
  position: fixed;
  top: 0%;
  transition: 0.5s;
  width: 50%;
  left: 25%;
  height: 0.5rem;
  background: ${standardStyles.colorPrimary};
  border-radius: 2rem;
  overflow: hidden;
`;

const ScrollContentBar = styled.span.attrs((props) => ({
  style: {
    transform: `translateX(${props.scroll}%)`,
  },
}))`
  position: absolute;
  transition: 0.5s;
  height: 0.5rem;
  width: 100%;
  background: ${standardStyles.colorQuinary};
  border-radius: 2rem;
  left: -100%;
`;

export default function Timeline() {
  const { ref, scrollContent } = useScrollContent(false);

  const firstContent = `
  I graduated in Chemical Engineering at Nanyang Technological University in 2018.
  It seemed appropriate and safe, to pursue something I studied, but that didn't work out.
  Instead, I landed my first career in Micron Semiconductor as a Process Engineer.
  Although it was a steep learning curve, I worked hard and took pride in my responsibilities.
  Through my engineering projects, I gained strong expertise in problem-solving, data-mining and analysis.
  However, as I thought about the next chapter of my professional life, I yearned for something different.
  A career that I am passionate about and can improve the quality of people's lives through technology.
  `;

  const secondContent = `
  This was when it first started; in January 2021, I was graced with an opportunity to work on scaling up a web application project at Micron, migrating from monolith to microservices.
  Programming was something that I always wanted to pick up but found it too difficult and abstract to put into practical use.
  Nonetheless, I was interested in giving a shot at it and kickstarted my coding journey with Python Flask.
  `;

  const thirdContent = `
  An evolving world without limits, with endless opportunities and applications, incorporating creativity and problem solving.
  Behind the scenes, programming has catalyzed societal and technological advancements.
  We are hopelessly dependent on it.
  The monumental impact programming can create piqued my interest and I delved into it. 
  Subsequently, I dedicated many hours building foundational knowledge in vanilla Python, Javascript, CSS, HTML and SQL.
  Udemy was exceptionally helpful.
  `;

  const fourthContent = `
  Hungry for knowledge, I wanted to expand my horizon and take advantage of the many open-sourced projects.
  I learned Bootstrap, React, Angular, FastAPI, ExpressJS, Gin, Celery, Docker, ELK, Jenkins, and more.
  Picked up Golang and familiarized with Linux OS along the way.
  The countless documentations and articles were overwhelming. 
  To make digesting of the information easier, I created a repository to document my learning, drawing understanding from different sources.
  `;

  const fifthContent = `
  To put my theory knowledge into practice, I worked on multiple mock fullstack projects, including building a shopping app platform and stock screener.
  I explored working with CSS, Leetcode for DSA, and deep dived into OOP and design patterns, APIs, software architectures, DevOps and networking.
  At Micron, I completed the web application migration to microservices.
  This platform averaged over 1,218 requests daily, automating the work of Process Engineers and Technicians across Micron sites globally. 
  Fullstack development calls to my passions, and I am constantly grabbing onto any other langauges, frameworks or principles that I can integrate into my coding.
  `;

  const sixthContent = `
  My journey has just started.
  There is still a world of unexplored territories, and I have only scratched the surface.
  Moving forward, I am looking for my next adventure into software development.
  `;

  return (
    <Wrap ref={ref} id="timeline">
      <ScrollContentWrap scroll={scrollContent}>
        <ScrollContentBar scroll={scrollContent}></ScrollContentBar>
      </ScrollContentWrap>
      <StickyWrap></StickyWrap>

      <TimelineContent heading="PRELUDE" digit={0} content={firstContent} />
      <TimelineContent heading="VIRGIN" digit={1} content={secondContent} />
      <TimelineContent heading="FOUNDATION" digit={2} content={thirdContent} />
      <TimelineContent
        heading="EXPLORATION"
        digit={3}
        content={fourthContent}
      />
      <TimelineContent heading="PRACTICE" digit={4} content={fifthContent} />
      <TimelineContent heading="PRESENT" digit={5} content={sixthContent} />
    </Wrap>
  );
}
