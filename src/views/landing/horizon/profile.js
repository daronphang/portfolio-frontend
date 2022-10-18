import React, { useState } from 'react';
import styled from 'styled-components';

import profilePic from '../../../images/horizon-background.jpg';
import SocialMedia from './social-media';
import { mediaSizes, standardStyles } from '../../../utils/styles';

const Wrap = styled.div.attrs((props) => ({
  style: {
    opacity: Math.min(1, (0.5 - (props.ratio || -1)) * 4.5),
  },
}))`
  position: relative;
`;

const Content = styled.div`
  box-sizing: border-box;
  position: absolute;
  border-radius: 1rem;
  width: 50rem;
  padding: 3rem;
  font-size: ${standardStyles.fontSizeMedium};
  background: ${standardStyles.colorPrimary};
  color: ${standardStyles.fontColorPrimary};
  top: 10%;
  left: calc(50% - 25rem);
  opacity: 0.9;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (${mediaSizes.desktop}) {
    height: auto;
    width: 100%;
  }
`;

export default function HorizonProfile() {
  const content = `
  Professionally, I am an engineer by heart, a fullstack developer.
  I enjoy the process of building and assembling: from desktop, to IKEA drawers, guitar pedalboard and web applications.
  When not at my desk, you can find me hitting the gym, playing the drums and guitar, and reading up on finance, global news, and tech.
  Dilligence, determination and honesty are the principles I deeply value.
  My progressive Christian faith is where I find hope, strength and motivation: to do my work heartily, being responsible with the duties entrusted to me.
  `;

  return (
    <Wrap>
      <Content>{content}</Content>
      <SocialMedia />
      <ProfileImg src={profilePic}></ProfileImg>
    </Wrap>
  );
}
