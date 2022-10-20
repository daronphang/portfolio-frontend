import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

import { standardStyles } from '../../utils/styles';

const NavLink = styled(HashLink).attrs((props) => ({
  style: {
    backgroundColor: props.isActive
      ? standardStyles.colorSecondary
      : standardStyles.colorQuinary,
  },
}))`
  position: relative;
  border: 0.1rem solid ${standardStyles.fontColorSecondary};
  padding: 0.7rem;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &:before {
    background-color: ${standardStyles.colorTertiary};
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 100%;
    left: 0;
    transition: transform 0.5s;
  }

  &:hover:before {
    transform: translateY(-100%);
  }
`;

const Span = styled.span`
  position: relative;
  z-index: 2;
`;

export default function CustomNavLink({ id, to, children }) {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    const element = document.getElementById(id);
    if (!element) return;

    if (
      element.getBoundingClientRect().top <= 0 &&
      element.getBoundingClientRect().bottom > 0
    ) {
      // element is in view
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleActive);

    return () => {
      window.removeEventListener('scroll', handleActive);
    };
  }, []);

  return (
    <NavLink isActive={active} smooth to={to}>
      <Span>{children}</Span>
    </NavLink>
  );
}
