import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Default = styled.button`
  box-sizing: border-box;
  border: 0.3rem solid #ffffff;
  border-radius: 50%;
  padding: 1rem;
  font-size: ${(props) => {
    switch (props.size) {
      case 'SMALL':
        return '2rem';
      case 'MEDIUM':
        return '2.5rem';
      case 'LARGE':
        return '3.5rem';
    }
  }};
  color: #a2a2a2;

  &:hover svg {
    color: #0f1922;
    transform: scale(1.2);
  }
`;

const Icon = styled(FontAwesomeIcon)`
  transition: transform 0.5s;
`;

const Primary = styled(Default)``;

const Secondary = styled(Default)``;

export default function ButtonIcon({ variant, icon, size, children }) {
  return (
    <>
      {variant === 'primary' && (
        <Primary size={size}>
          <Icon icon={icon}></Icon>
        </Primary>
      )}
      {variant === 'secondary' && <Secondary>{children}</Secondary>}
    </>
  );
}
