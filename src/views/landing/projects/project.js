import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { mediaQuery, standardStyles } from '../../../utils/styles';

const Wrap = styled.div`
  display: grid;
  margin-left: ${(props) => props.left || 0}rem;
  margin-top: 5rem;
  grid-template-rows: 8rem auto;
  grid-template-columns: auto;
  border-left: 0.5rem solid ${standardStyles.fontColorPrimary};

  ${mediaQuery(
    'ios',
    `
    padding: 0.7rem;
  `
  )};
  ${mediaQuery(
    'android',
    `
    padding: 0.7rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    padding: 1rem;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    padding: 2rem;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    padding: 2rem;
  `
  )};
`;

const HeadingWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Heading = styled.div`
  color: ${standardStyles.fontColorPrimary};
  font-family: Devant Horgen;

  ${mediaQuery(
    'ios',
    `
    font-size: 5rem;
  `
  )};
  ${mediaQuery(
    'android',
    `
    font-size: 6rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    font-size: 6rem;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    font-size: 6rem;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    font-size: 7rem;
  `
  )};
`;

const Date = styled.div`
  color: ${standardStyles.fontColorPrimary};
  font-family: Devant Horgen;

  ${mediaQuery(
    'ios',
    `
    font-size: 2.5rem;
    margin-left: 1rem;
  `
  )};
  ${mediaQuery(
    'android',
    `
    font-size: 3rem;
    margin-left: 1.5rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    font-size: 3rem;
    margin-left: 1.5rem;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    font-size: 3.5rem;
    margin-left: 1.8rem;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    font-size: 4rem;
    margin-left: 2rem;
  `
  )};
`;

const Content = styled.div`
  color: ${standardStyles.fontColorPrimary};

  ${mediaQuery(
    'ios',
    `
    font-size: ${standardStyles.fontSizeVerySmall};
  `
  )};
  ${mediaQuery(
    'android',
    `
    font-size: ${standardStyles.fontSizeSmall};
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    font-size: ${standardStyles.fontSizeSmall};
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    font-size: ${standardStyles.fontSizeMedium};
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    font-size: ${standardStyles.fontSizeMedium};
  `
  )};
`;

const ProjectLink = styled(Link)`
  color: ${standardStyles.fontColorPrimary};

  ${mediaQuery(
    'ios',
    `
  font-size: ${standardStyles.fontSizeVerySmall};
`
  )};
  ${mediaQuery(
    'android',
    `
  font-size: ${standardStyles.fontSizeSmall};
`
  )};
  ${mediaQuery(
    'tablet',
    `
  font-size: ${standardStyles.fontSizeSmall};
`
  )};
  ${mediaQuery(
    'laptop',
    `
  font-size: ${standardStyles.fontSizeMedium};
`
  )};

  ${mediaQuery(
    'desktop',
    `
  font-size: ${standardStyles.fontSizeMedium};
`
  )};
`;

export default function Project({ heading, content, date, left, link }) {
  const [points, setPoints] = useState(null);

  useEffect(() => {
    const temp = [];
    content.forEach((row) => temp.push(<li>{row}</li>));
    setPoints(temp);
  }, []);
  return (
    <Wrap left={left}>
      <HeadingWrap>
        <Heading>{heading}</Heading>
        <Date>{date}</Date>
      </HeadingWrap>
      <Content>
        <ul>{points}</ul>
      </Content>
      {link && (
        <ProjectLink to={link} target="_blank">
          View Project
        </ProjectLink>
      )}
    </Wrap>
  );
}
