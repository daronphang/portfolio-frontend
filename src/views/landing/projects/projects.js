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
  Scalable and resilient fullstack application (Microservices architecture) developed in Micron to improve productivity and facilitate the daily work of Process Engineers. 
  Performs complex SQL queries across relational databases (Snowflake, Postgres, SQL Server),
  triggering of asynchronous automated workflows (eliminating manual tasks),
  data visualization of results (X-Y, bar, timeline), 
  scheduling of jobs (CRON),
  and integrates metrices from multiple in-house sources into a single consolidated platform that is scoped to the individual owner. 
  Project was awarded as the Culture Champion for Q4 2022 with significant productivity gain of ~800 manhour savings per week.
  Moreover, it was approved as a global BKM (best known method) and extended to other Micron sites (Taiwan, China, Japan and USA).
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
