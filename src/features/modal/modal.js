import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';

import ModalFormSuccess from './modal-form-success';
import { closeModal, selectModalName } from './modalSlice';

const appear = keyframes`
  100% {opacity: 1}
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  inset: 0;
  opacity: 0;
  animation: ${appear} 0.5s forwards;
`;

const Backdrop = styled.div`
  position: fixed;
  background-color: #333333;
  opacity: 0.9;
  overflow: hidden;
  inset: 0;
  z-index: 999;
  padding: 3vh;
`;

const ModalWrap = styled.div`
  border-radius: 2vh;
  background: #ffffff;
  box-sizing: border-box;
  z-index: 1000;
  padding: 2.5vh;
  width: ${(props) => props.width}vh;
  overflow: auto;
  font-weight: 600;
`;

export default function Modal({ size, clickable, children }) {
  const modal = useSelector(selectModalName);
  const dispatch = useDispatch();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        // clear state in store
        dispatch(closeModal());
      }
    };
    document.body.addEventListener('keydown', handleKeyPress);

    return () => {
      document.body.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    switch (size) {
      case 'small':
        setWidth(45);
        break;
      case 'medium':
        setWidth(75);
        break;
      case 'large':
        setWidth(95);
        break;
    }
  }, [width]);

  return (
    <Wrap>
      <Backdrop
        role="presentation"
        aria-label="backdrop"
        onClick={() => {
          clickable ? dispatch(closeModal()) : null;
        }}
      />
      <ModalWrap width={width}>
        {modal === 'SUCCESSFORM' && <ModalFormSuccess />}
      </ModalWrap>
    </Wrap>
  );
}
