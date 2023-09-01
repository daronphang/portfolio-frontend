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
  width: 70rem;
  margin-left: calc(50% - 35rem);
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
    font-size: 10rem;
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
  /*
  load balancing, availability, data sanitzation, multithreading, design patterns
  */
  const myAssistantContent = [
    'Spearheaded a dynamic web application from design to distribution ' +
      'that integrates metrics, automates workflows, and enhances the efficiency ' +
      'of engineers and technicians by identifying and streamlining repetitive tasks, ' +
      'as well as recognizing potential optimization opportunities in their daily responsibilities ',
    'Proficiently assessed and pinpointed gaps within the codebase to enhance overall ' +
      'software quality and maintainability by applying SOLID design principles',
    'Architecture and technologies used: ' +
      'SPA (Angular), ' +
      'Microservices (Python, Golang) with caching and choreography (RabbitMQ, Redis), ' +
      'orchestration (saga pattern with finite automata), ' +
      'dependency injection and Factory/Singleton/Composite patterns, ' +
      'RESTful APIs (Flask, FastAPI, Gin) with client/server-side caching (LRU), ' +
      'fault tolerant and high availability with redundancy through the deployment of ephemeral containers (Docker), ' +
      'reverse proxy (API gateway) and load balancing (Nginx), ' +
      'dynamic and transactional CRUD operations with data validation and sanitization (SQL Server, Postgres, Snowflake), ' +
      'multiprocessing and multithreading for long-running tasks (Celery), ' +
      'CRON jobs scheduling, ' +
      'CI/CD automation (Jenkins), ' +
      'centralized logging and monitoring (ELK), ' +
      'and team collaboration using a monorepo approach (Git, Bitbucket, Confluence, Jira)',
    'Awarded with the Best Idea of the Quarter for Productivity Improvement and as the Culture Champion (Innovation) in 2022 with significant productivity gain of ' +
      '~800 manhour savings per week and averaging ~1,218 requests daily in Singapore',
    'Approved as a global BKM (Best Known Method) and extended to other Micron sites ' +
      '(Taiwan, China, Japan, USA)',
  ];

  const orionContent = [
    'Developed a static web application focused on visualizing charts ' +
      'to facilitate data mining and analysis, metrics reporting, and highlight ' +
      'deviations in Key Performance Indicators (KPIs), aiding in the prompt ' +
      'identification of trends and anomalies',
    'Architecture and technologies used: ' +
      'Microservices (Python) with caching and choreography (Redis, RabbitMQ), ' +
      'API gateway (FastAPI), ' +
      'RESTful APIs (external) and gRPC (internal), ' +
      'reverse proxy (Nginx), ' +
      'visualization libraries (Matplotlib, Pandas), ' +
      'web scraping (Selenium), ' +
      'persistent storage (SQL Server), ' +
      'multiprocessing and multithreading for long-running tasks (Celery), ' +
      'and centralized logging and monitoring (ELK) ',
    'Eliminated manual interventions through tasks automation and ' +
      'achieved a productivity gain of ~3 manhour savings per day',
  ];

  const personal = [
    'Built classic snake game with gameboy interface in Javascript',
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
          heading="ORION"
          date="JAN 2023-PRESENT"
          content={orionContent}
        />
        <Project
          heading="PERSONAL"
          date="AUG 2023-PRESENT"
          content={personal}
          link="/snake-game"
        />
      </ProjectsWrap>

      <Spacing />
    </Wrap>
  );
}
