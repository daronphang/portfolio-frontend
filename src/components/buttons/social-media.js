import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import Button from './button';

const StyledButton = styled(Button)`
  padding: 2.5rem;
  width: 30rem;
  position: relative;
  overflow: hidden;

  &:hover span {
    transform: translateX(-30rem);
  }

  &:hover svg {
    opacity: 1;
  }
`;

const Span = styled.span`
  position: absolute;
  color: #0f1922;
  font-weight: 400;
  line-height: 5rem;
  background: #ffffff;
  width: 30rem;
  height: 5.6rem;
  border-radius: 2.5rem;
  top: -0.2rem;
  left: -0.2rem;
  z-index: 2;
  transition: 2s;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  z-index: 1;
  width: 30.5rem;
  height: 6.2rem;
  top: -0.5rem;
  left: -0.5rem;
  }
`;

const IconWrap = styled(FontAwesomeIcon)`
  opacity: 0;
  transition: 1s ease-in;
  display: inline-block;
  cursor: pointer;

  &:nth-child(1) {
    color: #4267b2;
  }

  &:nth-child(2) {
    color: #e1306c;
  }

  &:nth-child(3) {
    color: #0e76a8;
  }

  &:nth-child(4) {
    color: #db4437;
  }

  &:hover {
    transform: scale(1.4);
  }
`;

export default function SocialMediaButton() {
  return (
    <StyledButton variant="primary">
      <Span>Social Media</Span>
      <IconContainer>
        <IconWrap id="facebook" icon={['fab', 'facebook']} />
        <IconWrap id="instagram" icon={['fab', 'instagram']} />
        <IconWrap id="linkedin" icon={['fab', 'linkedin']} />
        <IconWrap id="google" icon={['fab', 'google']} />
      </IconContainer>
    </StyledButton>
  );
}
