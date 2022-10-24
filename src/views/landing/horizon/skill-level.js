import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { mediaQuery, standardStyles } from '../../../utils/styles';

const Wrap = styled.div.attrs((props) => ({
  style: {
    opacity: props.show ? 1 : 0,
  },
}))`
  position: relative;
  transition: 1s;

  ${mediaQuery(
    'mobile',
    `
    margin-top: 2rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    margin-top: 3rem;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    margin-top: 4rem;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    margin-top: 5rem;
  `
  )};
`;

const SkillBarWrap = styled.div`
  position: relative;
  background: ${standardStyles.colorPrimary};
  border-radius: 2rem;
  overflow: hidden;

  ${mediaQuery(
    'mobile',
    `
    width: 12rem;
    height: 1rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    width: 15rem;
    height: 1.5rem;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    width: 20rem;
    height: 2rem;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    width: 25rem;
    height: 2.5rem;
  `
  )};
`;

const SkillBar = styled.span.attrs((props) => ({
  style: {
    transform: props.show
      ? `translateX(${props.amount || 0}%)`
      : 'translateX(0%)',
  },
}))`
  position: absolute;
  transition: 2s;
  width: 100%;
  background: ${standardStyles.colorQuinary};
  border-radius: 2rem;
  left: -100%;

  ${mediaQuery(
    'mobile',
    `
    height: 1rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    height: 1.5rem;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    height: 2rem;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    height: 2.5rem;
  `
  )};
`;

const Text = styled.div`
  position: absolute;

  font-weight: 500;
  color: ${standardStyles.fontColorPrimary};

  ${mediaQuery(
    'mobile',
    `
    top: -1.5rem;
    font-size: ${standardStyles.fontSizeVerySmall};
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    top: -2rem;
    font-size: ${standardStyles.fontSizeSmall};
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    top: -3rem;
    font-size: ${standardStyles.fontSizeMedium};
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    top: -3rem;
    font-size: ${standardStyles.fontSizeMedium};
  `
  )};
`;

export default function SkillLevel({ trigger, scrollContent, amount, text }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (scrollContent >= trigger) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [scrollContent]);

  return (
    <Wrap show={show}>
      <Text>{text}</Text>
      <SkillBarWrap>
        <SkillBar show={show} amount={amount} />
      </SkillBarWrap>
    </Wrap>
  );
}
