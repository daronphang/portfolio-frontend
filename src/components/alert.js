import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  padding: 2rem;
  margin-left: 5%;
  margin-right: 5%;
  border-radius: 0.5rem;
`;

const Line = styled.span`
  position: absolute;
  height: 0.2rem;
  width: 2.5rem;
  background: #333333;

  &:nth-child(1) {
    transform: rotate(45deg);
  }

  &:nth-child(2) {
    transform: rotate(-45deg);
  }
`;

const CloseButton = styled.button`
  all: unset;
  position: absolute;
  cursor: pointer;
  left: 90%;
  width: 2rem;
  height: 2rem;
  padding: 0rem;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

export default function Alert({ severity, onClose, styles, children }) {
  const [color, setColor] = useState(null);
  const [bgColor, setBGColor] = useState(null);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    switch (severity) {
      case 'error':
        setColor('rgb(95, 33, 32)');
        setBGColor('rgb(253, 237, 237)');
        break;
      case 'warning':
        setColor('rgb(102, 60, 0)');
        setBGColor('rgb(255, 244, 229)');
        break;
      case 'info':
        setColor('rgb(1, 67, 97)');
        setBGColor('rgb(229, 246, 253)');
        break;
      case 'success':
        setColor('rgb(30, 70, 32)');
        setBGColor('rgb(237, 247, 237)');
        break;
    }
  });

  return (
    !hide && (
      <Wrap bgColor={bgColor} color={color} styles={styles}>
        {children}
        {onClose && (
          <CloseButton onClick={() => setHide(true)}>
            <Line></Line>
            <Line></Line>
          </CloseButton>
        )}
      </Wrap>
    )
  );
}
