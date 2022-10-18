import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { standardStyles } from '../../../utils/styles';

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
      transform: translate(-7rem, -4rem);
    }

    span:nth-child(2) {
      transition-delay: 0.25s;
      opacity: 1;
      transform: translate(7rem, -4rem);
    }

    span:nth-child(3) {
      transition-delay: 0.5s;
      opacity: 1;
      transform: translate(7rem, 4rem);
    }

    span:nth-child(4) {
      transition-delay: 0.75s;
      opacity: 1;
      transform: translate(-7rem, 4rem);
    }
  }
`;

const Label = styled.label`
  position: relative;
  all: unset;
  display: flex;
  height: 5rem;
  width: 5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 50%;
  background: none;
  border: 0.5rem solid #ffffff;
  z-index: 2;

  &:hover {
    cursor: pointer;
  }
`;

const Line = styled.span`
  height: 0.25rem;
  width: 3rem;
  background: #ffffff;
  transition: 0.5s;
`;

const Wrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 20%;
  top: 55%;
`;

const IconsWrap = styled.div`
  position: absolute;
  height: 7rem;
  width: 7rem;
`;

const IconWrap = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${standardStyles.fontColorPrimary};
  height: 6.5rem;
  width: 6.5rem;
  opacity: 0;
  transition: 1s;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  transition: 0.5s;
  display: inline-block;
  cursor: pointer;
  font-size: 4.7rem;
  color: #aeabab;
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
