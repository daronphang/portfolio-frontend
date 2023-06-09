import React, { useEffect, useState } from 'react';
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
    'mobile',
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
    'mobile',
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
    font-size: 7rem;
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
    'mobile',
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
    font-size: 4rem;
    margin-left: 2rem;
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
    'mobile',
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

export default function Project({ heading, content, date, left }) {
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
    </Wrap>
  );
}
