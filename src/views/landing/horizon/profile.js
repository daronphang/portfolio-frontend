import React from 'react';
import styled from 'styled-components';

import profilePic from '../../../images/horizon-background.jpg';
import SocialMedia from './social-media';
import { mediaQuery, standardStyles } from '../../../utils/styles';
import { useInView } from 'react-intersection-observer';
import SkillLevel from './skill-level';
import useScrollContent from '../../../hooks/useScrollContent';

const Wrap = styled.div.attrs((props) => ({
  style: {
    opacity: Math.min(1, (props.entry || 0) * 3),
  },
}))`
  position: relative;
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Content = styled.div`
  box-sizing: border-box;
  position: absolute;
  border-radius: 1rem;
  background: ${standardStyles.colorPrimary};
  color: ${standardStyles.fontColorPrimary};
  opacity: 0.9;

  ${mediaQuery(
    'ios',
    `
    top: 5%;
    width: 30rem;
    padding: 1.5rem;
    font-size: ${standardStyles.fontSizeVerySmall};
    left: calc(50% - 15rem);
  `
  )};
  ${mediaQuery(
    'android',
    `
    top: 5%;
    width: 30rem;
    padding: 1.5rem;
    font-size: ${standardStyles.fontSizeSmall};
    left: calc(50% - 15rem);
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    top: 5%;
    width: 30rem;
    padding: 2rem;
    font-size: ${standardStyles.fontSizeSmall};
    left: calc(50% - 15rem);
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    top: 5%;
    width: 50rem;
    padding: 3rem;
    font-size: ${standardStyles.fontSizeMedium};
    left: calc(50% - 25rem);
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    top: 10%;
    width: 50rem;
    padding: 3rem;
    font-size: ${standardStyles.fontSizeMedium};
    left: calc(50% - 25rem);
  `
  )};
`;

const ProfileImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

// top offset: 5skills * (5rem + 2rem)
// left offset: check width of skillbar / 2
const SocialMediaWrap = styled.div`
  position: absolute;

  ${mediaQuery(
    'ios',
    `
    top: calc(30% + 25rem);
    left: calc(10% + 1rem);
  `
  )};
  ${mediaQuery(
    'android',
    `
    top: calc(30% + 30rem);
    left: calc(10% + 1rem);
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    top: calc(30% + 35rem);
    left: calc(10% + 1rem);
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    top: calc(40% + 38rem);
    left: calc(5% + 7rem);
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    top: calc(30% + 50rem);
    left: calc(10% + 8rem);
  `
  )};
`;

const SkillLevelWrap = styled.div`
  position: absolute;

  ${mediaQuery(
    'ios',
    `
    top: 40%;
    left: 5%;
  `
  )};
  ${mediaQuery(
    'android',
    `
    top: 40%;
    left: 5%;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    top: 40%;
    left: 5%;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    top: 40%;
    left: 5%;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    top: 30%;
    left: 10%;
  `
  )};
`;

const threshold = [];
for (let i = 0; i < 1; i += 0.01) {
  threshold.push(i);
}

export default function HorizonProfile() {
  const [scrollRef, scrollContent] = useScrollContent(false);
  const { ref, inView, entry } = useInView({
    threshold,
  });

  const content = `
  I am a detail-oriented, creative and data-driven process engineer with a strong passion 
  for lifelong learning and solving challenging problems. Diligence, determination and honesty 
  are the principles I deeply value. When not at my desk, you can find me working out in the gym, 
  playing the drums and guitar, and reading up on finance and tech news.
  `;

  return (
    <Wrap ref={ref} entry={entry?.intersectionRatio}>
      <Placeholder ref={scrollRef} />
      <Content>{content}</Content>
      <SkillLevelWrap>
        <SkillLevel
          trigger={40}
          scrollContent={scrollContent}
          text="Javascript"
          amount={80}
        />
        <SkillLevel
          trigger={45}
          scrollContent={scrollContent}
          text="Python"
          amount={85}
        />
        <SkillLevel
          trigger={50}
          scrollContent={scrollContent}
          text="Golang"
          amount={60}
        />
        <SkillLevel
          trigger={55}
          scrollContent={scrollContent}
          text="CSS"
          amount={75}
        />
        <SkillLevel
          trigger={60}
          scrollContent={scrollContent}
          text="HTML"
          amount={80}
        />
      </SkillLevelWrap>
      <SocialMediaWrap>
        <SocialMedia />
      </SocialMediaWrap>
      <ProfileImg src={profilePic}></ProfileImg>
    </Wrap>
  );
}
