import React, { forwardRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

import { standardStyles } from '../../utils/styles';

const typing = keyframes`
0% { width: 0 }
100% { width: 100% }
`;

const backtyping = keyframes`
0% { width: 0 }
40% { width: 100% }
60% { width: 100% }
90%, 100% {width: 0}
`;

const blinkCaret = keyframes`
from, to { border-color: transparent }
50% { border-color: ${standardStyles.fontColorPrimary}; }
`;

// timing and steps based on number of characters

const Span = styled.span`
  display: inline-block;
  overflow: hidden;
  width: 0;
  white-space: nowrap;
  margin: 0 auto;
  border-right: 0.2rem solid transparent;
  list-style: none;
  font-family: Arame;
  animation-delay: ${(props) => props.styles.delay}s;
  animation: ${(props) =>
    props.styles.backtyping
      ? css`
          ${backtyping} ${props.styles.duration}s steps(${props.styles
            .steps}, end) infinite, ${blinkCaret} 0.75s step-end infinite;
        `
      : css`
          ${typing} ${props.styles.duration}s steps(${props.styles
            .steps}, end) forwards, ${blinkCaret} 0.75s step-end infinite;
        `};
`;

// stop the cursor at last letter
const Wrap = styled.div`
  display: inline-block;
`;

const TypeWriter = forwardRef(function TypeWriter(props, ref) {
  return (
    <Wrap>
      <Span ref={ref} styles={props.styles}>
        {props.children}
      </Span>
    </Wrap>
  );
});

export default TypeWriter;
