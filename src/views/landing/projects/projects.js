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
    'ios',
    `
    padding: 2rem 5rem 5rem 5rem;
  `
  )};
  ${mediaQuery(
    'android',
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

const ProjectsWrap = styled.div`
  ${mediaQuery(
    'ios',
    `
  width: 32rem;
  margin-left: calc(50% - 16rem);
  
`
  )};
  ${mediaQuery(
    'android',
    `
  width: 44rem;
  margin-left: calc(50% - 22rem);
  
`
  )};
  ${mediaQuery(
    'tablet',
    `
  width: 40rem;
  margin-left: calc(50% - 20rem);
`
  )};
  ${mediaQuery(
    'laptop',
    `
  width: 55rem;
  margin-left: calc(50% - 27.5rem);
`
  )};

  ${mediaQuery(
    'desktop',
    `
  width: 80rem;
  margin-left: calc(50% - 40rem);
`
  )};
`;

const Heading = styled.div`
  font-weight: 500;
  color: ${standardStyles.fontColorPrimary};
  font-family: Devant Horgen;
  text-decoration: underline;

  ${mediaQuery(
    'ios',
    `
    font-size: 8rem;
  `
  )};
  ${mediaQuery(
    'android',
    `
    font-size: 9rem;
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
  const myAssistantContent = [
    'Developed a scalable full-stack microservice web application at Micron Technology ' +
      'that serves as a consolidated platform to improve productivity for Process Engineers ' +
      'through workflow automation and metrices intergration',
    'Deployed frontend as an SPA instance (Angular) that is extended from an in-house framework (Omelek)',
    'Built backend microservices (Python, Golang) that implements an API gateway using REST (Flask, FastAPI, Gin), ' +
      'choreographs async requests (Redis, RabbitMQ), ' +
      'retrieves data through dynamic CRUD from SQL (Snowflake, SQL Server), ' +
      'visualizes cleaned and transformed data (Matplotlib, Pandas, Highcharts), ' +
      'executes async tasks using saga orchestration pattern as state machine with multi-threading (Celery), ' +
      'and schedules CRON jobs on a daily basis',
    'Services are deployed with Docker, automated with CI/CD (Jenkins) and monitored with ELK stack',
    'Awarded as the Culture Champion for Q4 2022 with significant productivity gain of ' +
      '~800 manhour savings per week',
    'Approved as a global BKM (Best Known Method) and extended to other Micron sites ' +
      '(Taiwan, China, Japan and USA)',
  ];

  const dynamoContent = [
    'Developed a robust backend microservice platform (Python) that serves static HTML with Nginx, ' +
      'implements an API gateway (FastAPI) using REST (external) and gRPC (internal), ' +
      'utilizes a caching mechanism for large SQL queries, ' +
      'and executes async tasks with multi-threading (Celery)',
    'Services are deployed with Docker and monitored with ELK stack',
    'Achieved productivity gain of ~3 manhour savings per day',
  ];
  return (
    <Wrap id="projects">
      <ProjectsWrap>
        <Heading>PROJECTS</Heading>
        <Project
          heading="MYASSISTANT"
          date="APR 2021-PRESENT"
          content={myAssistantContent}
        />
        <Project
          heading="DYNAMO"
          date="JAN 2023-PRESENT"
          content={dynamoContent}
        />
      </ProjectsWrap>

      <Spacing />
    </Wrap>
  );
}
