import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import profilePic from '../../images/profile-pic.png';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  border: 1px solid white;
`;

const Backdrop = styled.div`
  height: 35rem;
  width: 35rem;
  border-radius: 50%;
  overflow: hidden;
  padding: 2rem;
  background: #ffffff;
  transition: 0.5s;

  &:hover {
    border-radius: 7%;
    height: 45rem;
  }

  &:hover div {
    opacity: 1;
  }

  &:hover div:first-child {
    margin-top: -6rem;
  }

  &:hover span,
  svg {
    opacity: 1;
  }
`;

const PictureCrop = styled.div`
  position: absolute;
  height: 35rem;
  width: 35rem;
  border-radius: 50%;
  overflow: hidden;
  transition: 0.5s;
`;

const Image = styled.img`
  position: relative;
  height: 60rem;
  width: 85rem;
  top: -15rem;
  right: 24.5rem;
`;

const Text = styled.div`
  position: relative;
  color: #0f1922;
  font-size: 2.2rem;
  transition: 1s;
  opacity: 0;
  top: 30rem;
  text-align: center;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  opacity: 0;
  position: relative;
  margin-top: 32rem;
  transition: 2s;
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

  #twitter:hover {
    color: #00acee;
  }
`;

const IconWrap = styled(FontAwesomeIcon)`
  transition: 0.5s;
  display: inline-block;
  cursor: pointer;
  font-size: 5rem;
  color: #aeabab;

  &:hover {
    transform: scale(1.4);
  }
`;

export default function ProfileCard({ styles, children }) {
  return (
    <Wrap>
      <Backdrop>
        <PictureCrop>
          <Image src={profilePic} alt="profile-pic"></Image>
        </PictureCrop>
        <Text>Process and Equipment Engineer (Semiconductor)</Text>
        <SocialMediaIcons>
          <Anchor
            href="https://www.facebook.com/daron.phang"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrap id="facebook" icon={['fab', 'facebook']} />
          </Anchor>

          <Anchor
            href="https://www.instagram.com/daronphang/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrap id="instagram" icon={['fab', 'instagram']} />
          </Anchor>
          <Anchor
            href="https://www.linkedin.com/in/daronphang/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrap id="linkedin" icon={['fab', 'linkedin']} />
          </Anchor>
          <Anchor
            href="https://twitter.com/Daronphang"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrap id="twitter" icon={['fab', 'twitter']} />
          </Anchor>
        </SocialMediaIcons>
      </Backdrop>
    </Wrap>
  );
}
