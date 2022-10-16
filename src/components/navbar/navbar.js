import React from 'react';
import styled from 'styled-components';

import useScrollDirection from '../../hooks/useScrollDirection';
import CustomNavLink from './navlink';
import { mediaQuery, standardStyles } from '../../utils/styles';

const NavBarWrap = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  float: right;
  top: 1rem;
  right: 1rem;
  z-index: 100;
  transition: 0.5s;
  opacity: ${(props) => (props.show ? '1' : '0')};
  z-index: ${(props) => (props.show ? '1' : '0')};
  ${mediaQuery(
    'mobile',
    `
  font-size: ${standardStyles.fontSizeSmallMobile};
  `
  )};
  ${mediaQuery(
    'tablet',
    `
  font-size: ${standardStyles.fontSizeSmallTablet};
  `
  )};
  ${mediaQuery(
    'desktop',
    `
  font-size: ${standardStyles.fontSizeNormalDesktop};
  `
  )};
`;

const Span = styled.span`
  position: relative;
  z-index: 2;
  font-family: Arame;
`;

export default function NavBar() {
  const { direction } = useScrollDirection();

  return (
    <NavBarWrap show={direction === 'UP' ? true : false}>
      <CustomNavLink to="/#introduction" id="introduction">
        <Span>INTRO</Span>
      </CustomNavLink>
      <CustomNavLink to="/#timeline" id="timeline">
        <Span>JOURNEY</Span>
      </CustomNavLink>
      <CustomNavLink to="/#about" id="about">
        <Span>ABOUT</Span>
      </CustomNavLink>
      <CustomNavLink to="/#contact" id="contact">
        <Span>CONTACT</Span>
      </CustomNavLink>
    </NavBarWrap>
  );
}
