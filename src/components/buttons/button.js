import React, { useEffect } from 'react';
import styled from 'styled-components';

import '../../utils/shared.css';
import { standardStyles } from '../../utils/styles';
import Loader from '../loaders/loader';

const Default = styled.button`
  position: relative;
  box-sizing: border-box;
  border: 0.3rem solid ${standardStyles.fontColorPrimary};
  border-radius: 1.5rem;
  padding: 1.5rem 3rem 1.5rem 3rem;
  font-size: ${standardStyles.fontSizeMedium};
  width: fit-content;
  animation-duration: 0.3s;

  &:hover {
    cursor: pointer;
  }
`;

const LoaderWrap = styled.span.attrs((props) => ({
  style: {
    opacity: props.isLoading ? 1 : 0,
    transform: `translateX(${props.isLoading ? 0 : -2}rem)`,
    marginLeft: `${-props.size / 2}rem`,
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
`;

const Primary = styled(Default)`
  background: ${standardStyles.fontColorPrimary};
  color: ${standardStyles.fontColorSecondary};
`;

const Secondary = styled(Default)`
  color: ${standardStyles.fontColorSecondary};
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
