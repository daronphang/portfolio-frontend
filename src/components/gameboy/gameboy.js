import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { standardStyles, mediaQuery } from '../../utils/styles';

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #d8d8d8;
  padding: 2rem;
  display: flex;
  justify-content: center;
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
    height: 50rem;
    width: 40rem;
  `
  )}
  ${mediaQuery(
    'android',
    `
    height: 50rem;
    width: 40rem;
  `
  )}
  ${mediaQuery(
    'tablet',
    `
    height: 50rem;
    width: 40rem;
  `
  )}
  ${mediaQuery(
    'laptop',
    `
    height: 50rem;
    width: 40rem;
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
    height: 10rem;
`
  )}
  ${mediaQuery(
    'android',
    `
    height: 10rem;
`
  )}
${mediaQuery(
    'tablet',
    `
    height: 10rem;
`
  )}
${mediaQuery(
    'laptop',
    `
    height: 10rem;
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
    height: 37rem;
`
  )}
  ${mediaQuery(
    'android',
    `
    height: 37rem;
`
  )}
${mediaQuery(
    'tablet',
    `
    height: 37rem;
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
  left: -12rem;
  top: 8rem;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  display: inline-block;
  text-shadow: -1px -1px 1.2px rgb(255 255 255 / 50%),
    1px 1px 1px rgb(1 1 1 / 7%);

  ${mediaQuery(
    'ios',
    `
        font-size: 4rem;
        margin-left: 1.5rem;
    `
  )}
  ${mediaQuery(
    'android',
    `
        font-size: 4rem;
        margin-left: 1.5rem;
    `
  )}
    ${mediaQuery(
    'tablet',
    `
        font-size: 4rem;
        margin-left: 1.5rem;
    `
  )}
    ${mediaQuery(
    'laptop',
    `
        font-size: 4rem;
        margin-left: 1.5rem;
    `
  )}
    ${mediaQuery(
    'desktop',
    `
        font-size: 3rem;
        margin-left: 1.7rem;
        margin-top: 0.5rem;
    `
  )}
`;

const MovementButton = styled.div`
  position: relative;
  background: ${standardStyles.colorPrimary};

  ${mediaQuery(
    'ios',
    `
    height: 10rem;
    width: 5rem;
`
  )}
  ${mediaQuery(
    'android',
    `
    height: 10rem;
    width: 5rem;
`
  )}
      ${mediaQuery(
    'tablet',
    `
    height: 10rem;
    width: 5rem;
`
  )}
      ${mediaQuery(
    'laptop',
    `
    height: 10rem;
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

const MovementButtonTop = styled(MovementButton)`
  box-shadow: inset 3px 5px 5px -1px rgb(255 255 255 / 50%),
    inset -3px -3px 5px -1px rgb(0 0 0 / 99%), 1px 1px 1px 2px rgb(0 0 0 / 80%),
    2.5px 5px 5px 1px rgb(0 0 0 / 90%);
`;

const MovementButtonLeft = styled(MovementButtonTop)``;
const MovementButtonRight = styled(MovementButton)`
  box-shadow: inset -3px 5px 3px -1px rgb(255 255 255 / 50%),
    inset -3px -3px 5px -1px rgb(0 0 0 / 99%), 1px 1px 1px 2px rgb(0 0 0 / 80%),
    2.5px 5px 5px 1px rgb(0 0 0 / 90%);
`;
const MovementButtonBottom = styled(MovementButton)`
  box-shadow: inset 3px 2px 3px -1px rgb(255 255 255 / 50%),
    inset -3px -3px 5px -1px rgb(0 0 0 / 99%), 1px 1px 1px 2px rgb(0 0 0 / 80%),
    2.5px 5px 5px 1px rgb(0 0 0 / 90%);
`;
const MovementButtonCenter = styled(MovementButton)`
  box-shadow: inset 0px 0px 3px 0px rgb(255 255 255 / 50%),
    inset -3px -3px 5px -1px rgb(0 0 0 / 99%), 1px 1px 1px 2px rgb(0 0 0 / 80%),
    2.5px 5px 5px 1px rgb(0 0 0 / 90%);
`;

const ControlButton = styled.div`
  position: relative;
  height: 5rem;
  width: 5rem;
  background: ${standardStyles.colorPrimary};
  border-radius: 50%;
  top: -4rem;

  box-shadow: inset 3px 5px 5px -1px rgb(255 255 255 / 50%),
    inset -3px -3px 5px -1px rgb(0 0 0 / 99%), 1px 1px 1px 2px rgb(0 0 0 / 80%),
    2.5px 5px 5px 1px rgb(0 0 0 / 90%);
`;

const ControlButtonA = styled(ControlButton)`
  left: 38rem;
`;

const ControlButtonB = styled(ControlButton)`
  left: 31rem;
`;

export default function withGameboy(Component) {
  return function withGameBoyComponent() {
    const [keyDown, setKeyDown] = useState(null);

    useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, []);

    const handleKeyDown = (event) => {
      setKeyDown(event.key);
    };

    return (
      <Wrapper>
        <GameBoy>
          <ScreenWrapper>
            <Screen>
              <Component keyDown={keyDown} />
            </Screen>
          </ScreenWrapper>
          <MovementWrapper>
            <FlexDiv>
              <MovementButtonTop>
                <Text>&#8593;</Text>
              </MovementButtonTop>
            </FlexDiv>

            <FlexDiv>
              <MovementButtonLeft>
                <Text>&#8592;</Text>
              </MovementButtonLeft>
              <MovementButtonCenter></MovementButtonCenter>

              <MovementButtonRight>
                <Text>&#8594;</Text>
              </MovementButtonRight>
            </FlexDiv>
            <FlexDiv>
              <MovementButtonBottom>
                <Text>&#8595;</Text>
              </MovementButtonBottom>
            </FlexDiv>
          </MovementWrapper>
          <ControlButtonA>
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
