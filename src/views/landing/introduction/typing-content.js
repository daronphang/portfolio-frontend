import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { standardStyles, mediaQuery } from '../../../utils/styles';
import TypeWriter from '../../../components/typewriter';

const Wrap = styled.div`
  position: absolute;
  top: 30%;
  right: 10%;
`;
const Grid = styled.div`
  display: grid;
  color: ${standardStyles.primaryFontColor};
  text-align: left;
  align-self: start;
  justify-self: start;
  align-items: start;
  justify-items: start;
  color: ${standardStyles.fontColorPrimary};

  ${mediaQuery(
    'mobile',
    `
    grid-template-columns: 3rem 15rem;
  font-size: ${standardStyles.fontSizeSmall};
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    grid-template-columns: 4.5rem 23rem;
  font-size: ${standardStyles.fontSizeMedium};
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    grid-template-columns: 7rem 37rem;
  font-size: ${standardStyles.fontSizeLarge};
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    grid-template-columns: 7rem 37rem;
    font-size: ${standardStyles.fontSizeLarge};
  `
  )};
`;

export default function TypingContent() {
  const [renderDynamic, setRenderDynamic] = useState(false);
  const [counter, setCounter] = useState(0);
  const baseRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      baseRef.current.style.border = 'none';
      setRenderDynamic(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (counter === 3) {
      setCounter(0);
    } else if (counter === 0 && !renderDynamic) {
      setTimeout(() => {
        setCounter((prev) => prev + 1);
      }, 6000); // initial typing; amount is 2s + 4s
    } else {
      setTimeout(() => {
        setCounter((prev) => prev + 1);
      }, 4000);
    }
  }, [counter]);

  return (
    <Wrap>
      <Grid>
        <TypeWriter ref={baseRef} styles={{ duration: 1, steps: 6 }}>
          I&apos;M A{' '}
        </TypeWriter>
        {renderDynamic && counter === 0 && (
          <TypeWriter
            styles={{
              duration: 4,
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
              duration: 4,
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
              duration: 4,
              steps: 22,
              backtyping: true,
            }}
          >
            DRUMMER AND GUITARIST.
          </TypeWriter>
        )}
      </Grid>
    </Wrap>
  );
}
