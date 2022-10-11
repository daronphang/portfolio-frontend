import React, { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

const hideProgress = keyframes`
  30% {
    opacity: 1;
    transform: none;
  }
  100% {
    opacity: 0;
    transform: scale(1.4);
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  text-align: center;
  margin: auto;
  animation: ${(props) =>
    props.hide
      ? css`
          ${hideProgress} 2s forwards
        `
      : 'none'};
`;

const ProgressDiv = styled.div`
  position: relative;
  width: 20rem;
  height: 2.5rem;
  border-radius: 3.5rem;
  overflow: hidden;
`;

const ProgressSpan = styled.span`
  color: white;
  position: absolute;
  background-color: #ffffff;
  width: 21rem;
  height: 2.5rem;
  border-radius: inherit;
  left: -110%;
  top: 0px;
  bottom: 0;
  transform: translateX(0%);
  transition: 0.5s;
`;

export default function LoadingProgress({ progress }) {
  const [hide, setHide] = useState(false);
  const progressRef = useRef();

  const updateProgress = setTimeout(() => {
    progress++;
    progressRef.current.style.transform = `translateX(${progress}%)`;
  }, 50);

  useEffect(() => {
    if (Number(progress) <= 100) {
      setTimeout(updateProgress);

      if (Number(progress) === 100) {
        setHide(true);
      }
    } else {
      clearTimeout(updateProgress);
    }

    return () => {
      clearTimeout(updateProgress);
    };
  }, [progress]);

  return (
    <Wrap hide={hide}>
      <div>{progress}%</div>
      <br />
      <ProgressDiv>
        <ProgressSpan ref={progressRef} />
      </ProgressDiv>
    </Wrap>
  );
}
