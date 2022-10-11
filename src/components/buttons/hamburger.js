import React from 'react';
import styled from 'styled-components';

/*
 to align when hover, shift the top and bottom lines to align with the center line,
 then rotate 45deg in opposite direction
*/

const Input = styled.input`
  display: none;

  &:checked + label {
    span:nth-child(1) {
      transform: translate(0vh, 0.8vh) rotate(135deg);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: translate(0vh, -0.7vh) rotate(-135deg);
    }
  }
`;

const Label = styled.label`
  position: relative;
  all: unset;
  display: flex;
  height: 5vh;
  width: 5vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5vh;
  border-radius: 50%;
  background: none;
  border: 0.3vh solid #ffffff;
  z-index: 2;

  &:hover {
    cursor: pointer;
  }
`;

const Line = styled.span`
  height: 0.25vh;
  width: 3vh;
  background: #ffffff;
  transition: 0.5s;
`;

export default function Hamburger({ handleParent }) {
  return (
    <>
      <Input id="hamburger" type="checkbox" />
      <Label htmlFor="hamburger">
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </Label>
    </>
  );
}
