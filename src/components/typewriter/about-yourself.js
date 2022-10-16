import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { standardStyles, mediaQuery } from '../../utils/styles';
import TypeWriter from './typewriter';

const Grid = styled.div`
  display: grid;
  color: ${standardStyles.primaryFontColor};
  text-align: left;
  align-self: start;
  justify-self: start;
  align-items: start;
  justify-items: start;

  ${mediaQuery(
    'mobile',
    `
  font-size: ${standardStyles.fontSizeMediumMobile};
  grid-template-columns: 5.5rem auto;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
  font-size: ${standardStyles.fontSizeSmallTablet};
  grid-template-columns: 10rem auto;
  `
  )};
  ${mediaQuery(
    'desktop',
    `
  font-size: ${standardStyles.fontSizeMediumDesktop};
  grid-template-columns: 11vh auto;
  `
  )};
`;

export default function AboutYourself() {
  const [renderDynamic, setRenderDynamic] = useState(false);
  const [counter, setCounter] = useState(0);
  const baseRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      baseRef.current.style.border = 'none';
      setRenderDynamic(true);
    }, 3000);
  }, []);

  useEffect(() => {
    if (counter === 3) {
      setCounter(0);
    } else if (counter === 0 && !renderDynamic) {
      setTimeout(() => {
        setCounter((prev) => prev + 1);
      }, 9000);
    } else {
      setTimeout(() => {
        setCounter((prev) => prev + 1);
      }, 6000);
    }
  }, [counter]);

  return (
    <Grid>
      <TypeWriter ref={baseRef} styles={{ duration: 1, steps: 6 }}>
        I&apos;M A{' '}
      </TypeWriter>
      {renderDynamic && counter === 0 && (
        <TypeWriter
          styles={{
            duration: 6,
            steps: 20,
            backtyping: true,
          }}
        >
          FULLSTACK DEVELOPER.
        </TypeWriter>
      )}
      {renderDynamic && counter === 1 && (
        <TypeWriter
          styles={{
            duration: 6,
            steps: 18,
            backtyping: true,
          }}
        >
          SPORTS ENTHUSIAST.
        </TypeWriter>
      )}
      {renderDynamic && counter === 2 && (
        <TypeWriter
          styles={{
            duration: 6,
            steps: 22,
            backtyping: true,
          }}
        >
          DRUMMER/GUITARIST.
        </TypeWriter>
      )}
    </Grid>
  );
}
