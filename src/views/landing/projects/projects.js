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
  const maContent = [
    'Fullstack Microservices application developed in Micron (Singapore) serving as a consolidated platform for metrices integration and workflow automation that is scoped to the customization of a team member',
    'Goal is to facilitate and streamline the daily work of Process Engineers by creating a one-stop shop portal',
    `
    Deploys frontend as an SPA instance (Angular) extended from an in-house framework that leverages Jenkins for CI/CD (managed separately),
    implements RESTful APIs over HTTPS (Flask/Gin),
    generates complex SQL dynamically (CRUD) across multiple RDBMS (Snowflake, Postgres, SQL Server),
    triggers asynchronous automated workflows (Celery),
    performs data visualization (Pandas/Highcharts) and job scheduling of Python scripts (CRON)
    `,
    'Awarded as the Culture Champion for Q4 2022 that scaled to ~615 daily requests with significant productivity gain of ~800 manhour savings per week',
    'Approved as a global BKM (Best Known Method) and extended to other Micron sites (Taiwan, China, Japan and USA)',
  ];
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
