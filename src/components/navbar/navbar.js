import React from 'react';
import styled from 'styled-components';

import useScrollDirection from '../../hooks/useScrollDirection';
import CustomNavLink from './navlink';
import { mediaQuery, standardStyles } from '../../utils/styles';

const Wrap = styled.div.attrs((props) => ({
  style: {
    opacity: props.show ? '1' : '0',
    zIndex: props.show ? '100' : '0',
  },
}))`
  display: flex;
  position: fixed;
  transition: 0.5s;

  ${mediaQuery(
    'ios',
    `
  font-size: ${standardStyles.fontSizeVerySmall};
  `
  )};
  ${mediaQuery(
    'android',
    `
  font-size: ${standardStyles.fontSizeSmall};
  `
  )};
  ${mediaQuery(
    'tablet',
    `
  font-size: ${standardStyles.fontSizeSmall};
  `
  )};
  ${mediaQuery(
    'laptop',
    `
  font-size: ${standardStyles.fontSizeNormal};
  `
  )};

  ${mediaQuery(
    'desktop',
    `
  font-size: ${standardStyles.fontSizeNormal};
  `
  )};
`;

const Break = styled.div`
  flex: 1 1 auto;
`;

const Text = styled.div`
  margin-left: 1.5rem;
  margin-top: 1.5rem;
  font-weight: 500;
  text-decoration: underline;
  color: ${standardStyles.fontColorPrimary};
`;

const NavWrap = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  float: right;
  top: 1rem;
  right: 1rem;
`;

const Heading = styled.span`
  position: relative;
  z-index: 2;
`;

export default function NavBar() {
  const { direction } = useScrollDirection();

  return (
    <Wrap show={direction === 'UP' ? true : false}>
      <Text>Daron Phang</Text>
      <Break />
      <NavWrap>
        <CustomNavLink to="/#introduction" id="introduction">
          <Heading>Intro</Heading>
        </CustomNavLink>
        <CustomNavLink to="/#projects" id="projects">
          <Heading>Projects</Heading>
        </CustomNavLink>
        <CustomNavLink to="/#timeline" id="timeline">
          <Heading>Journey</Heading>
        </CustomNavLink>
        <CustomNavLink to="/#about" id="about">
          <Heading>About</Heading>
        </CustomNavLink>
        <CustomNavLink to="/#contact" id="contact">
          <Heading>Contact</Heading>
        </CustomNavLink>
      </NavWrap>
    </Wrap>
  );
}
