import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { standardStyles } from '../../utils/styles';
import TypeWriter from './typewriter';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 14.5vh auto;
  color: ${standardStyles.primaryFontColor};
  text-align: left;
  align-self: start;
  justify-self: start;
  align-items: start;
  justify-items: start;
  font-size: ${standardStyles.fontSizeLarge};
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
