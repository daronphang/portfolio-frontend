import React, { useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import tv from '../../images/retro-tv2.jpg';
import profilePic from '../../images/profile-pic-original.jpeg';
import useScrollAmount from '../../hooks/useScrollAmount';
import Minion from '../../components/minion';
import TypeWriter from '../../components/typewriter/typewriter';
import SocialMedia from '../../components/social-media';

const WrapBounds = styled.div`
  position: relative;
  width: 100%;
  background: rgb(20, 20, 20);
`;

const ZoomImgBounds = styled.div`
  position: relative;
  height: 100vh;
`;

const ZoomImg = styled.div.attrs((props) => ({
  style: {
    opacity: Math.min(1, ((props.ratio || 0) - 0.3) * 3),
    transform: `scale(${1 + Math.max(0, ((props.scroll - 55) * 1.5) / 100)})`, //  translateY(${Math.max(0, ((props.scroll - 50) * 3) / 10)}%)
  },
}))`
  top: 0%;
  position: sticky;
  transition: 0.5s;
`;

const Img = styled.img`
  position: absolute;
  height: 100vh;
  width: 100%;
`;

const MinionWrap = styled.div`
  position: absolute;
  left: 70%;
  bottom: -50vh;
`;

const TerminalWrap = styled.div`
  position: absolute;
  width: 100vw;
  margin-top: 28vh;
  color: #ffffff;
  font-size: 1vw;
  text-align: center;
`;

const ProfileWrap = styled.div.attrs((props) => ({
  style: {
    opacity: Math.min(1, (0.5 - (props.ratio || -1)) * 4.5),
  },
}))`
  position: relative;
  height: auto;
  width: 100%;
`;

const ProfileDescriptionBackdrop = styled.div`
  position: absolute;
  height: 67vh;
  width: 10vh;
  top: 17%;
  left: 3%;
  width: 30vw;
  background: rgb(20, 20, 20);
  padding: 2vh;
  border-radius: 2vh;
  opacity: 0.8;
`;

const ProfileDescription = styled.div`
  box-sizing: border-box;
  position: absolute;
  background: rgb(20, 20, 20);
  color: #ffffff;
  top: 5%;
  left: 50%;
  margin-left: -27.5vw;
  width: 55vw;
  word-spacing: -0.5vw;
  line-height: 2.1vw;
  padding: 3vh;
  border-radius: 2vh;
  opacity: 0.9;
  font-family: JetBrains;
  font-weight: 600;
  font-size: 1.7vw;
`;

const ProfileImg = styled.img`
  min-height: 100vh;
  width: 100%;
`;

export default function Horizon() {
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);
  const { scrollAmount } = useScrollAmount('about');
  const { ref, inView, entry } = useInView({
    threshold: [0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6],
  });

  const handleMouseMove = (event) => {
    setClientX(event.clientX);
    setClientY(event.clientY);
  };

  const description = `
  Professionally, I am an engineer by heart, a fullstack developer.
  I enjoy the process of building and assembling: from desktop, to IKEA drawers, guitar pedalboard and web applications.
  When not at my desk, you can find me hitting the gym, playing the drums and guitar, and reading up on finance, global news, and tech.
  Dilligence, determination and honesty are the principles I deeply value.
  My progressive Christian faith is where I find hope, strength and motivation: to do my work heartily, being responsible with the duties entrusted to me.
  `;

  return (
    <WrapBounds id="about" onMouseMove={handleMouseMove}>
      <ZoomImgBounds ref={ref}>
        <ZoomImg ratio={entry?.intersectionRatio} scroll={scrollAmount}>
          <Img src={tv}></Img>
          <MinionWrap>
            <Minion clientX={clientX} clientY={clientY} />
          </MinionWrap>
          {entry?.intersectionRatio > 0.3 && (
            <TerminalWrap>
              <TypeWriter styles={{ duration: 3, steps: 26 }}>
                Scroll down to continue...
              </TypeWriter>
            </TerminalWrap>
          )}
        </ZoomImg>
      </ZoomImgBounds>
      <ProfileWrap ratio={entry?.intersectionRatio}>
        {/* <ProfileDescriptionBackdrop /> */}
        <ProfileDescription>{description}</ProfileDescription>
        <SocialMedia />
        <ProfileImg src={profilePic}></ProfileImg>
      </ProfileWrap>
    </WrapBounds>
  );
}
