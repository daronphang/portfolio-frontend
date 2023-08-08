import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { standardStyles, mediaQuery } from '../../utils/styles';

export const CONTROLS = {
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight',
  SPACE: ' ',
};

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GameBoy = styled.div`
  background: #f1a939;
  position: relative;
  border-radius: 20% 20% 49% 49% / 2% 2% 6.5% 6.5%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  ${mediaQuery(
    'ios',
    `
    height: 95rem;
    width: 55rem;
    padding: 3rem;
  `
  )}
  ${mediaQuery(
    'android',
    `
    height: 70rem;
    width: 40rem;
    padding: 1.5rem;
  `
  )}
  ${mediaQuery(
    'tablet',
    `
    height: 77rem;
    width: 40rem;
    padding: 2rem;
  `
  )}
  ${mediaQuery(
    'laptop',
    `
    height: 90rem;
    width: 50rem;
    padding: 2rem;
  `
  )}
  ${mediaQuery(
    'desktop',
    `
    height: 95rem;
    width: 55rem;
    padding: 3rem;
  `
  )}
`;

const ScreenWrapper = styled.div`
  position: relative;
  border-radius: 20% 20% 49% 49% / 2% 2% 6.5% 6.5%;
  width: 100%;
  background: ${standardStyles.colorPrimary};
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  ${mediaQuery(
    'ios',
    `
    height: 39rem;
    padding: 2rem;
`
  )}
  ${mediaQuery(
    'android',
    `
    height: 39rem;
    padding: 2rem;
`
  )}
${mediaQuery(
    'tablet',
    `
    height: 40rem;
    padding: 2rem;
`
  )}
${mediaQuery(
    'laptop',
    `
    height: 45rem;
    padding: 3rem;
`
  )}
${mediaQuery(
    'desktop',
    `
    height: 45rem;
    padding: 3rem;
`
  )}
`;

const Screen = styled.div`
  background: #cfcfc3;

  ${mediaQuery(
    'ios',
    `
    height: 31rem;
`
  )}
  ${mediaQuery(
    'android',
    `
    height: 33rem;
`
  )}
${mediaQuery(
    'tablet',
    `
    height: 34rem;
`
  )}
${mediaQuery(
    'laptop',
    `
    height: 37rem;
`
  )}
${mediaQuery(
    'desktop',
    `
    height: 37rem;
`
  )}
`;

const MovementWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  ${mediaQuery(
    'ios',
    `
    left: -9rem;
    top: 8rem;
    `
  )}
  ${mediaQuery(
    'android',
    `
    left: -9rem;
    top: 8rem;
    `
  )}
    ${mediaQuery(
    'tablet',
    `
    left: -9rem;
    top: 8rem;
    `
  )}
    ${mediaQuery(
    'laptop',
    `
    left: -12rem;
    top: 8rem;
    `
  )}
    ${mediaQuery(
    'desktop',
    `
    left: -12rem;
    top: 8rem;
    `
  )}
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  text-shadow: -1px -1px 1.2px rgb(255 255 255 / 50%),
    1px 1px 1px rgb(1 1 1 / 7%);

  ${mediaQuery(
    'ios',
    `
    font-size: 3rem;
    margin-left: 0.5rem;
    `
  )}
  ${mediaQuery(
    'android',
    `
    font-size: 3rem;
    margin-left: 0.5rem;
    `
  )}
    ${mediaQuery(
    'tablet',
    `
    font-size: 2rem;
    margin-left: 0.5rem;
    `
  )}
    ${mediaQuery(
    'laptop',
    `
    font-size: 3rem;
    margin-left: 0.5rem;
    `
  )}
    ${mediaQuery(
    'desktop',
    `
    font-size: 3rem;
    margin-left: 0.5rem;
    `
  )}
`;

const MovementButton = styled.button`
  position: relative;
  background: ${standardStyles.colorPrimary};
  cursor: pointer;

  &:active {
    border: none;
    box-shadow: inset 0px 0px 5px -1px rgb(255 255 255 / 50%),
      inset -3px -3px 5px -1px rgb(0 0 0 / 99%),
      1px 1px 1px 2px rgb(0 0 0 / 80%), 2.5px 5px 5px 1px rgb(0 0 0 / 90%);
  }

  ${mediaQuery(
    'ios',
    `
    height: 5rem;
    width: 5rem;
`
  )}
  ${mediaQuery(
    'android',
    `
    height: 5rem;
    width: 5rem;
`
  )}
      ${mediaQuery(
    'tablet',
    `
    height: 4rem;
    width: 4rem;
`
  )}
      ${mediaQuery(
    'laptop',
    `
    height: 5rem;
    width: 5rem;
`
  )}
      ${mediaQuery(
    'desktop',
    `
    height: 5rem;
    width: 5rem;
`
  )};
`;

const MovementButtonUp = styled(MovementButton)`
  box-shadow: inset 3px 5px 5px -1px rgb(255 255 255 / 50%),
    inset -3px -3px 5px -1px rgb(0 0 0 / 99%), 1px 1px 1px 2px rgb(0 0 0 / 80%),
    2.5px 5px 5px 1px rgb(0 0 0 / 90%);
`;

const MovementButtonLeft = styled(MovementButtonUp)``;
const MovementButtonRight = styled(MovementButtonUp)`
  transform: rotate(90deg);
  box-shadow: inset 3px 1px 5px -1px rgb(255 255 255 / 50%),
    inset -3px -3px 5px -1px rgb(0 0 0 / 99%), 1px 1px 1px 2px rgb(0 0 0 / 80%),
    2.5px 5px 5px 1px rgb(0 0 0 / 90%);
`;
const MovementButtonDown = styled(MovementButton)`
  box-shadow: inset 3px -1px 3px -1px rgb(255 255 255 / 50%),
    inset -3px -3px 5px -1px rgb(0 0 0 / 99%), 1px 1px 1px 2px rgb(0 0 0 / 80%),
    2.5px 5px 5px 1px rgb(0 0 0 / 90%);
`;
const MovementButtonCenter = styled(MovementButton)`
  cursor: auto;
  box-shadow: inset -2px -1px -1px 0px rgb(255 255 255 / 50%),
    inset -3px -3px 5px -1px rgb(0 0 0 / 99%), 1px 1px 1px 2px rgb(0 0 0 / 80%),
    2.5px 5px 5px 1px rgb(0 0 0 / 90%);

  &: active {
    box-shadow: inset -2px -1px -1px 0px rgb(255 255 255 / 50%),
      inset -3px -3px 5px -1px rgb(0 0 0 / 99%),
      1px 1px 1px 2px rgb(0 0 0 / 80%), 2.5px 5px 5px 1px rgb(0 0 0 / 90%);
  }
`;

/*
  box-shadow: inset 0px 0px 3px 0px rgb(255 255 255 / 50%),
    inset -3px -3px 5px -1px rgb(0 0 0 / 99%), 1px 1px 1px 2px rgb(0 0 0 / 80%),
    2.5px 5px 5px 1px rgb(0 0 0 / 90%);
*/

const ControlButton = styled.button`
  position: relative;
  display: block;
  height: 5rem;
  width: 5rem;
  cursor: pointer;
  background: ${standardStyles.colorPrimary};
  border-radius: 50%;
  top: -4rem;

  box-shadow: inset 3px 5px 5px -1px rgb(255 255 255 / 50%),
    inset -3px -3px 5px -1px rgb(0 0 0 / 99%), 1px 1px 1px 2px rgb(0 0 0 / 80%),
    2.5px 5px 5px 1px rgb(0 0 0 / 90%);
`;

const ControlButtonA = styled(ControlButton)`
  ${mediaQuery(
    'ios',
    `
    left: 28rem;
    `
  )}
  ${mediaQuery(
    'android',
    `
    left: 28rem;
    `
  )}
    ${mediaQuery(
    'tablet',
    `
    left: 28rem;
    `
  )}
    ${mediaQuery(
    'laptop',
    `
    left: 38rem;
    `
  )}
    ${mediaQuery(
    'desktop',
    `
    left: 38rem;
    `
  )}
`;

const ControlButtonB = styled(ControlButton)`
  ${mediaQuery(
    'ios',
    `
    left: 22rem;
    `
  )}
  ${mediaQuery(
    'android',
    `
    left: 22rem;
    `
  )}
    ${mediaQuery(
    'tablet',
    `
    left: 22rem;
    `
  )}
    ${mediaQuery(
    'laptop',
    `
    left: 31rem;
    `
  )}
    ${mediaQuery(
    'desktop',
    `
    left: 31rem;
    `
  )}
`;

export default function withGameboy(Component) {
  return function withGameBoyComponent() {
    const myRef = useRef();

    useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, []);

    const handleKeyDown = (event) => {
      if (myRef.current) myRef.current.handleKeyDown(event.key);
    };

    const handleClickButton = (key) => {
      if (myRef.current) myRef.current.handleKeyDown(key);
    };

    return (
      <Wrapper>
        <GameBoy>
          <ScreenWrapper>
            <Screen>
              <Component ref={myRef} />
            </Screen>
          </ScreenWrapper>
          <MovementWrapper>
            <FlexDiv>
              <MovementButtonUp onClick={() => handleClickButton(CONTROLS.UP)}>
                <Text>&#8593;</Text>
              </MovementButtonUp>
            </FlexDiv>

            <FlexDiv>
              <MovementButtonLeft
                onClick={() => handleClickButton(CONTROLS.LEFT)}
              >
                <Text>&#8592;</Text>
              </MovementButtonLeft>
              <MovementButtonCenter disabled></MovementButtonCenter>

              <MovementButtonRight
                onClick={() => handleClickButton(CONTROLS.RIGHT)}
              >
                <Text>&#8593;</Text>
              </MovementButtonRight>
            </FlexDiv>
            <FlexDiv>
              <MovementButtonDown
                onClick={() => handleClickButton(CONTROLS.DOWN)}
              >
                <Text>&#8595;</Text>
              </MovementButtonDown>
            </FlexDiv>
          </MovementWrapper>
          <ControlButtonA onClick={() => handleClickButton(CONTROLS.SPACE)}>
            <Text>A</Text>
          </ControlButtonA>
          <ControlButtonB>
            <Text>B</Text>
          </ControlButtonB>
        </GameBoy>
      </Wrapper>
    );
  };
}
