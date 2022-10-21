import React from 'react';
import styled from 'styled-components';

import { mediaQuery, standardStyles } from '../../../utils/styles';
import Project from './project';

const Wrap = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  background: ${standardStyles.colorPrimary};

  ${mediaQuery(
    'mobile',
    `
    padding: 2rem 5rem 5rem 5rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    padding: 3rem 10rem 8rem 10rem;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    padding: 5rem 15rem 10rem 15rem;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    padding: 5rem 15rem 10rem 15rem;
  `
  )};
`;

const Heading = styled.div`
  font-weight: 500;
  color: ${standardStyles.fontColorPrimary};
  font-family: Devant Horgen;
  text-decoration: underline;

  ${mediaQuery(
    'mobile',
    `
    font-size: 8rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    font-size: 10rem;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    font-size: 12rem;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    font-size: 12rem;
  `
  )};
`;

const Spacing = styled.div`
  width: 100%;
  height: 30rem;
`;

export default function Projects() {
  const maContent = `
  Fullstack platform developed in Micron to facilitate the daily work of Process Engineers 
  by bringing together tracking metrices and data from multiple sources into a single
  consolidated view scoped to the individual owner, and to trigger automated workflows (eliminating manual tasks) with ~800 manhour savings per week.
  Completed the migration from Monolith to Microservices for better scaling, resilience and freedom to integrate heterogenous technology stacks. 
  Project was approved as a global BKM (best known method) and extended to other Micron sites (Taiwan, China, Japan and USA).
  `;
  return (
    <Wrap id="projects">
      <Heading>PROJECTS</Heading>
      <Project
        heading="MYASSISTANT"
        date="APR 2021-PRESENT"
        content={maContent}
      />
      <Spacing />
    </Wrap>
  );
}
