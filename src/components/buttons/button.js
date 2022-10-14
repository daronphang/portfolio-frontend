import React, { useEffect } from 'react';
import styled from 'styled-components';

import '../../utils/shared.css';
import Loader from '../loaders/loader';

const Default = styled.button`
  position: relative;
  box-sizing: border-box;
  border: 0.3vh solid #ffffff;
  border-radius: 1.5vh;
  padding: 1.5vh 3vh 1.5vh 3vh;
  font-size: 2.5vh;
  color: #ffffff;
  width: fit-content;
  animation-duration: 0.3s;

  &:hover {
    cursor: pointer;
  }
`;

const LoaderWrap = styled.span.attrs((props) => ({
  style: {
    opacity: props.isLoading ? 1 : 0,
    transform: `translateX(${props.isLoading ? 0 : -2}vh)`,
    marginLeft: `${-props.size / 2}vh`,
  },
}))`
  position: absolute;
  transition: 0.5s;
  left: 50%;
`;

const Text = styled.span.attrs((props) => ({
  style: {
    opacity: props.isLoading ? 0 : 1,
  },
}))`
  transition: 0.5s;
  font-family: Arame;
`;

const Primary = styled(Default)`
  background: #ffffff;
  color: #333333;
`;

const Secondary = styled(Default)`
  color: #333333;
`;

export default function Button({
  id,
  variant,
  type,
  handleClick,
  onError,
  isLoading,
  children,
}) {
  useEffect(() => {
    const handleAnimation = () => {
      const element = document.getElementById(id);
      element.style.animationName = '';
    };
    document.addEventListener('animationend', handleAnimation);

    return () => {
      document.removeEventListener('animationend', handleAnimation);
    };
  }, []);
  return (
    <>
      {variant === 'primary' && (
        <Primary
          id={id}
          type={type}
          onClick={handleClick}
          onError={onError}
          aria-label={id}
        >
          <LoaderWrap isLoading={isLoading} size={3}>
            <Loader size={3} />
          </LoaderWrap>
          <Text isLoading={isLoading}>{children}</Text>
        </Primary>
      )}
      {variant === 'secondary' && (
        <Secondary id={id} type={type} onClick={handleClick} aria-label={id}>
          {children}
        </Secondary>
      )}
    </>
  );
}