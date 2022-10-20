import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { standardStyles, mediaQuery } from '../../../utils/styles';

const Input = styled.input`
  display: none;

  &:checked + label {
    span:nth-child(1) {
      transform: translate(0rem, 0.8rem) rotate(135deg);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: translate(0rem, -0.7rem) rotate(-135deg);
    }
  }

  &:checked + label + div {
    span:nth-child(1) {
      opacity: 1;

      ${mediaQuery(
        'mobile',
        `
        transform: translate(-4rem, -3rem);
      `
      )};
      ${mediaQuery(
        'tablet',
        `
        transform: translate(-7rem, -4rem);
      `
      )};
      ${mediaQuery(
        'laptop',
        `
        transform: translate(-7rem, -4rem);
      `
      )};

      ${mediaQuery(
        'desktop',
        `
        transform: translate(-7rem, -4rem);
      `
      )};
    }

    span:nth-child(2) {
      transition-delay: 0.25s;
      opacity: 1;

      ${mediaQuery(
        'mobile',
        `
        transform: translate(4rem, -3rem);
      `
      )};
      ${mediaQuery(
        'tablet',
        `
        transform: translate(7rem, -4rem);
      `
      )};
      ${mediaQuery(
        'laptop',
        `
        transform: translate(7rem, -4rem);
      `
      )};

      ${mediaQuery(
        'desktop',
        `
        transform: translate(7rem, -4rem);
      `
      )};
    }

    span:nth-child(3) {
      transition-delay: 0.5s;
      opacity: 1;

      ${mediaQuery(
        'mobile',
        `
        transform: translate(4rem, 3rem);
      `
      )};
      ${mediaQuery(
        'tablet',
        `
        transform: translate(7rem, 4rem);
      `
      )};
      ${mediaQuery(
        'laptop',
        `
        transform: translate(7rem, 4rem);
      `
      )};

      ${mediaQuery(
        'desktop',
        `
        transform: translate(7rem, 4rem);
      `
      )};
    }

    span:nth-child(4) {
      transition-delay: 0.75s;
      opacity: 1;
      ${mediaQuery(
        'mobile',
        `
        transform: translate(-4rem, 3rem);
      `
      )};
      ${mediaQuery(
        'tablet',
        `
        transform: translate(-7rem, 4rem);
      `
      )};
      ${mediaQuery(
        'laptop',
        `
        transform: translate(-7rem, 4rem);
      `
      )};

      ${mediaQuery(
        'desktop',
        `
        transform: translate(-7rem, 4rem);
      `
      )};
    }
  }
`;

const Label = styled.label`
  position: relative;
  all: unset;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: none;
  z-index: 2;

  ${mediaQuery(
    'mobile',
    `
    height: 4rem;
    width: 4rem;
    gap: 0.6rem;
    border: 0.3rem solid ${standardStyles.fontColorPrimary};
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    height: 5rem;
    width: 5rem;
    gap: 0.5rem;
    border: 0.5rem solid ${standardStyles.fontColorPrimary};
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    height: 5rem;
    width: 5rem;
    gap: 0.5rem;
    border: 0.5rem solid ${standardStyles.fontColorPrimary};
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    height: 5rem;
    width: 5rem;
    gap: 0.5rem;
    border: 0.5rem solid ${standardStyles.fontColorPrimary};
  `
  )};

  &:hover {
    cursor: pointer;
  }
`;

const Line = styled.span`
  background: #ffffff;
  transition: 0.5s;

  ${mediaQuery(
    'mobile',
    `
    height: 0.1rem;
    width: 2rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    height: 0.25rem;
    width: 3rem;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    height: 0.25rem;
    width: 3rem;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    height: 0.25rem;
    width: 3rem;
  `
  )};
`;

const Wrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconsWrap = styled.div`
  position: absolute;

  ${mediaQuery(
    'mobile',
    `
    height: 4rem;
    width: 4rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    height: 7rem;
    width: 7rem;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    height: 7rem;
    width: 7rem;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    height: 7rem;
    width: 7rem;
  `
  )};
`;

const IconWrap = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${standardStyles.fontColorPrimary};
  opacity: 0;
  transition: 1s;

  ${mediaQuery(
    'mobile',
    `
    height: 4rem;
    width: 4rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    height: 5rem;
    width: 5rem;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    height: 6.5rem;
    width: 6.5rem;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    height: 6.5rem;
    width: 6.5rem;
  `
  )};
`;

const StyledIcon = styled(FontAwesomeIcon)`
  transition: 0.5s;
  display: inline-block;
  cursor: pointer;
  color: #aeabab;

  ${mediaQuery(
    'mobile',
    `
    font-size: 3rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    font-size: 4rem;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    font-size: 4.7rem;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    font-size: 4.7rem;
  `
  )};
`;

const Anchor = styled.a`
  #facebook:hover {
    color: #4267b2;
  }

  #instagram:hover {
    color: #e1306c;
  }

  #linkedin:hover {
    color: #0e76a8;
  }

  #github:hover {
    color: #24292f;
  }
`;

export default function SocialMedia() {
  return (
    <Wrap>
      <Input id="hamburger" type="checkbox" />
      <Label htmlFor="hamburger">
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </Label>
      <IconsWrap>
        <IconWrap htmlFor="hamburger">
          <Anchor
            href="https://www.facebook.com/daron.phang"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledIcon id="facebook" icon={['fab', 'facebook']} />
          </Anchor>
        </IconWrap>
        <IconWrap>
          <Anchor
            href="https://www.instagram.com/daronphang/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledIcon id="instagram" icon={['fab', 'instagram']} />
          </Anchor>
        </IconWrap>
        <IconWrap>
          <Anchor
            href="https://www.linkedin.com/in/daronphang/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledIcon id="linkedin" icon={['fab', 'linkedin']} />
          </Anchor>
        </IconWrap>
        <IconWrap>
          <Anchor
            href="https://github.com/daronphang"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledIcon id="github" icon={['fab', 'github']} />
          </Anchor>
        </IconWrap>
      </IconsWrap>
    </Wrap>
  );
}
