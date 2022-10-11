import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const Wrap = styled.div`
  position: relative;
  background: #ffffff;
  margin: auto;
`;

const MinionBodyWrap = styled.div`
  position: absolute;
  height: 25vh;
  width: 14vh;
  left: 30%;
  top: calc(48% - 12.5vh);
`;

const MinionBody = styled.div`
  position: absolute;
  height: 25vh;
  width: 14vh;
  left: calc(50% - 7vh);
  top: calc(48% - 12.5vh);
  background: #ffcb4f;
  border-radius: 8vh 8vh 5vh 5vh;
  overflow: hidden;
  z-index: 1;
`;

const Hair = styled.li`
  list-style: none;
  position: absolute;
  height: 3vh;
  width: 1.5vh;
  margin-top: -0.5vh;
  z-index: 2;
`;

const LeftHair = styled(Hair)`
  top: -0.5vh;
  left: 5vh;
  border-radius: 0 90% 0 0;
  border-right: 0.1vh solid #333333;

  &:nth-child(1) {
    top: -0.8vh;
  }

  &:nth-child(2) {
    transform: rotate(-15deg);
    left: 4vh;
    top: -0.2vh;
  }

  &:nth-child(3) {
    left: 3vh;
    top: 0vh;
    transform: rotate(-30deg);
  }

  &:nth-child(4) {
    left: 2vh;
    top: 0.5vh;
    transform: rotate(-45deg);
  }

  &:nth-child(5) {
    left: 1vh;
    top: 1.5vh;
    transform: rotate(-60deg);
  }
`;

const RightHair = styled(Hair)`
  top: -0.5vh;
  left: 7.5vh;
  border-radius: 80% 0 0 0;
  border-left: 0.1vh solid #333333;

  &:nth-child(7) {
    left: 8.5vh;
    top: -0.2vh;
    transform: rotate(15deg);
  }

  &:nth-child(8) {
    left: 9.5vh;
    top: 0vh;
    transform: rotate(30deg);
  }

  &:nth-child(9) {
    left: 11vh;
    top: 0.5vh;
    transform: rotate(45deg);
  }

  &:nth-child(10) {
    left: 12vh;
    top: 1.5vh;
    transform: rotate(60deg);
  }
`;

const LeftHairBack = styled(LeftHair)`
  height: 1.5vh;
  left: 0.6vh;

  &:nth-child(1) {
    top: -0.5vh;
    left: 6vh;
  }

  &:nth-child(2) {
    left: 4vh;
    top: -0.5vh;
    transform: rotate(-10deg);
  }

  &:nth-child(3) {
    left: 0.5vh;
    top: 1.5vh;
    transform: rotate(-60deg);
  }
`;

const RightHairBack = styled(RightHair)`
  height: 1.5vh;
  left: 7vh;

  &:nth-child(4) {
    left: 10vh;
    top: 0vh;
    transform: rotate(30deg);
  }

  &:nth-child(5) {
    left: 12vh;
    top: 1.5vh;
    transform: rotate(60deg);
  }
`;

const Goggle = styled.div`
  margin-top: 6vh;
`;

const StrapLeft = styled.div`
  position: absolute;
  height: 0;
  width: 1.5vh;
  border-left: 0.2vh solid transparent;
  border-right: 0.2vh solid transparent;
  border-bottom: 2vh solid #444444;
  margin-top: 0vh;
  margin-left: 0.1vh;
  transform: rotate(-90deg);
`;

const StrapRight = styled(StrapLeft)`
  transform: rotate(90deg);
  margin-left: 12vh;
`;

const FrameLeft = styled.div`
  position: absolute;
  top: 4vh;
  left: 1.8vh;
  border-radius: 100%;
  height: 4.5vh;
  width: 4.5vh;
  border: 0.5vh solid #cccccc;
`;

const FrameRight = styled(FrameLeft)`
  margin-left: 5vh;
`;

const FrameBorderLeft = styled.div`
  position: absolute;
  border: 0.3vh solid #666666;
  border-radius: 100%;
  height: 4.1vh;
  width: 4.1vh;
  top: 4.4vh;
  left: 2.2vh;
`;

const FrameBorderRight = styled(FrameBorderLeft)`
  left: 7.2vh;
`;

const EyeLeft = styled.div`
  position: absolute;
  border-radius: 100%;
  height: 4.1vh;
  width: 4.1vh;
  background: #ffffff;
  box-shadow: inset 0vh 0.2vh 0.8vh 0vh #a0a0a0;
  left: 2.5vh;
  top: 4.7vh;
  transform: rotate(0deg);
`;

const EyeRight = styled(EyeLeft)`
  left: 7.5vh;
`;

const Iris = styled.div`
  position: relative;
  border-radius: 100%;
  background-color: #e7a452;
  width: 1.5vh;
  height: 1.5vh;
  left: 1vh;
  top: 1vh;
`;

const Pupil = styled.div`
  position: relative;
  border-radius: 100%;
  background-color: #333333;
  width: 0.5vh;
  height: 0.5vh;
  left: 0.5vh;
  top: 0.3vh;
`;

const BatEyeLids = keyframes`
0% {
  z-index: 1;
}

5% {
  z-index: -1;
}

100% {
  z-index: -1;
}
`;

const EyeLids = styled.div`
  position: absolute;
  border-radius: 50%;
  background: #ffcb4f;
  height: 4.1vh;
  width: 4.1vh;
  top: 4.7vh;
  animation-name: ${BatEyeLids};
  animation-iteration-count: infinite;
  animation-duration: 5s;

  &:before {
    content: '';
    position: absolute;
    height: 0.3vh;
    width: 4.1vh;
    top: 2vh;
    background: #a29d9d;
  }
`;

const EyeLidsLeft = styled(EyeLids)`
  left: 2.5vh;
`;

const EyeLidsRight = styled(EyeLids)`
  left: 7.5vh;
`;

const Mouth = styled.div`
  position: absolute;
  width: 7vh;
  height: 3vh;
  border-bottom: 0.4vh solid #de9a33;
  border-radius: 45%;
  margin-top: 3.2vh;
  left: 3.5vh;
`;

const Reflection = styled.div`
  position: absolute;
  width: 6vh;
  height: 8vh;
  background: #ffffff;
  filter: blur(25px);
  opacity: 0.3;
  margin-top: 3vh;
  left: 2vh;
  z-index: 1;
`;

const Dungarees = styled.div`
  position: relative;
  background: #6d9cc6;
  height: 12vh;
  top: 8vh;
`;

const AdjusterTop = styled.div`
  position: absolute;
  height: 0;
  width: 6vh;
  transform: rotate(180deg);
  border-left: 4vh solid transparent;
  border-right: 4vh solid transparent;
  border-bottom: 2.5vh solid #ffcb4f;
  top: 14vh;
`;

const Thread = styled.span`
  position: absolute;
  border-top: 0.1vh dashed #333333;
`;

const Button = styled.div`
  position: absolute;
  border-radius: 100%;
  background: #333333;
  height: 0.5vh;
  width: 0.5vh;
`;

const Adjuster = styled.div`
  position: absolute;
  height: 0;
  width: 0;
  margin-top: -2vh;
  border-bottom: 2.5vh solid #ffcb4f;
  z-index: 3;
`;

const AdjusterBottomLeft = styled(Adjuster)`
  border-right: 4vh solid transparent;

  & span:nth-child(1) {
    transform: rotate(32deg);
    width: 6.3vh;
    left: -0.5vh;
    top: -0.3vh;
  }

  & span:nth-child(2) {
    transform: rotate(32deg);
    width: 6.3vh;
    left: -0.5vh;
    top: 1.5vh;
  }

  & span:nth-child(3) {
    transform: rotate(90deg);
    width: 1.8vh;
    left: 4.5vh;
    top: 2.3vh;
  }

  & span:nth-child(4) {
    transform: rotate(150deg);
    border-left: 0.1vh dashed #333333;
    border-right: none;
    border-radius: 50%;
    width: 4vh;
    height: 4vh;
    top: 4vh;
  }

  & div {
    left: 4.5vh;
    top: 1.7vh;
  }
`;

const AdjusterBottomRight = styled(Adjuster)`
  border-left: 4vh solid transparent;
  margin-left: 10vh;

  & span:nth-child(1) {
    transform: rotate(-32deg);
    width: 6.3vh;
    left: -5.8vh;
    top: -0.3vh;
  }

  & span:nth-child(2) {
    transform: rotate(-32deg);
    width: 6.3vh;
    left: -5.8vh;
    top: 1.5vh;
  }

  & span:nth-child(3) {
    transform: rotate(90deg);
    width: 1.8vh;
    left: -6.3vh;
    top: 2.3vh;
  }

  & span:nth-child(4) {
    transform: rotate(-150deg);
    border-right: 0.1vh dashed #333333;
    border-left: none;
    border-radius: 50%;
    width: 4vh;
    height: 4vh;
    left: -4.1vh;
    top: 4vh;
  }

  & div {
    left: -5vh;
    top: 1.7vh;
  }
`;

const ExposedArmsLeft = styled.div`\
  position: absolute;
  margin-top: 0.5vh;
  height: 3vh;
  width: 4vh;
  background: #ffcb4f;
  z-index: 3;
`;

const ExposedArmsRight = styled(ExposedArmsLeft)`
  margin-left: 10vh;
`;

const Arm = styled.div``;

const Shoulder = styled.div`
  position: absolute;
  height: 7vh;
  width: 1.5vh;
  border-radius: 50% 50% 0.5vh 0.5vh;
  background: #ffcb4f;
  top: 16vh;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    border-radius: 50%;
    height: 5vh;
    width: 2vh;
    background: #ffcb4f;
    top: -0.4vh;
  }

  &:after {
    content: '';
    position: absolute;
    height: 3vh;
    width: 0.5vh;
    border-radius: 50%;
    top: 2vh;

    z-index: 3;
  }
`;

const Finger = styled.span`
  background: #333333;
  position: absolute;
  height: 1vh;
  width: 2vh;
  border-radius: 0.5vh;
`;

// consists of arm shadow
const LeftShoulder = styled(Shoulder)`
  left: -1.4vh;

  &:before {
    left: 0.2vh;
  }

  &:after {
    left: 1.3vh;
    box-shadow: inset 0.2vh 0 0.3vh -0.1vh rgba(0, 0, 0, 0.3);
  }

  & span:nth-child(1) {
    transform: rotate(-80deg);
    margin-left: -0.9vh;
    margin-top: 7.5vh;
    border-radius: 0.5vh 0 0 0.5vh;
  }

  & span:nth-child(2) {
    transform: rotate(90deg);
    margin-left: -0.1vh;
    margin-top: 7.6vh;
    width: 2.2vh;
  }

  & span:nth-child(3) {
    transform: rotate(65deg);
    margin-left: 0.7vh;
    margin-top: 7.4vh;
    border-radius: 0 0.5vh 0.5vh 0;
  }
`;

const RightShoulder = styled(Shoulder)`
  left: 13.9vh;

  &:before {
    left: -0.7vh;
  }

  &:after {
    left: -0.3vh;
    box-shadow: inset -0.2vh 0 0.3vh -0.1vh rgba(0, 0, 0, 0.3);
  }

  & span:nth-child(1) {
    transform: rotate(-65deg);
    margin-left: -1.1vh;
    margin-top: 7.5vh;
    border-radius: 0.5vh 0 0 0.5vh;
  }

  & span:nth-child(2) {
    transform: rotate(90deg);
    margin-left: -0.4vh;
    margin-top: 7.6vh;
    width: 2.2vh;
  }

  & span:nth-child(3) {
    transform: rotate(80deg);
    margin-left: 0.5vh;
    margin-top: 7.4vh;
    border-radius: 0 0.5vh 0.5vh 0;
  }
`;

const Gloves = styled.div`
  position: absolute;
  background: #333333;
  height: 2vh;
  width: 2vh;
  border-radius: 40%;
  top: 22.2vh;
`;

const LeftGloves = styled(Gloves)`
  left: -1.6vh;
`;

const RightGloves = styled(Gloves)`
  left: 13.7vh;
`;

const Leg = styled.div`
  position: absolute;
  z-index: 0;
  height: 0;
  width: 4.5vh;
  top: 24vh;
  margin-left: 3.3vh;
  border-left: 1.5vh solid transparent;
  border-right: 1.5vh solid transparent;
  border-bottom: 3vh solid #4b6587;
  transform: rotate(180deg);

  &:before {
    content: '';
    position: absolute;
    background: #7fa3b8;
    height: 4vh;
    width: 1vh;
    left: 1.7vh;
    top: 0vh;
  }

  & span:nth-child(1) {
    left: 2.5vh;
    top: 0.5vh;
  }

  & span:nth-child(2) {
    left: 2.9vh;
    top: -0.6vh;
    height: 2.2vh;
    width: 1.8vh;
    transform: rotate(90deg);
    border-radius: 40%;
  }

  & span:nth-child(3) {
    top: 0.6vh;
  }

  & span:nth-child(4) {
    left: -0.2vh;
    top: -0.6vh;
    height: 2.2vh;
    width: 1.8vh;
    transform: rotate(90deg);
    border-radius: 40%;
  }
`;

const LegFats = styled.span`
  position: absolute;
  height: 2vh;
  width: 2vh;
  border-radius: 40%;
  background: #4b6587;
`;

const Shoe = styled.div`
  position: absolute;
  height: 1.5vh;
  width: 2vh;
  background: #333333;
  top: 26.6vh;
  left: 6.5vh;
  border-radius: 30%;

  &:before {
    content: '';
    position: absolute;
    height: 1.5vh;
    width: 1.5vh;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background: #333333;
  }
`;

const LeftShoe = styled(Shoe)`
  margin-left: 1vh;

  &:before {
    border-top-left-radius: 0;
    border-top-right-radius: 100%;
    left: 1.4vh;
  }
`;

const RightShoe = styled(Shoe)`
  margin-left: -1.8vh;

  &:before {
    left: -0.8vh;
    border-top-left-radius: 100%;
    border-top-right-radius: 0;
  }
`;

const Text = styled.span`
  position: absolute;
  font-size: 25px;
  left: 30vh;
  width: 50vh;
`;

export default function Minion({ clientX, clientY }) {
  const eyeLeftRef = useRef();
  const eyeRightRef = useRef();

  useEffect(() => {
    // imagine as a triangle and getting the angle from radians
    // get positions relative to viewport

    function getAngle(eyeRef) {
      const bound = eyeRef.current.getBoundingClientRect();
      const offsetX = bound.left + eyeRef.current.clientWidth / 2 - clientX;
      const offsetY = bound.top + eyeRef.current.clientHeight / 2 - clientY;
      const angle = Math.atan2(offsetX, offsetY) * (180 / Math.PI) * -1;
      return angle;
    }

    let leftAngle = getAngle(eyeLeftRef);
    let rightAngle = getAngle(eyeRightRef);

    eyeLeftRef.current.style.transform = `rotate(${leftAngle}deg)`;
    eyeRightRef.current.style.transform = `rotate(${rightAngle}deg)`;
  }, [clientX, clientY]);

  return (
    <Wrap>
      <MinionBodyWrap>
        <ul>
          <LeftHair></LeftHair>
          <LeftHair></LeftHair>
          <LeftHair></LeftHair>
          <LeftHair></LeftHair>
          <LeftHair></LeftHair>
          <RightHair></RightHair>
          <RightHair></RightHair>
          <RightHair></RightHair>
          <RightHair></RightHair>
          <RightHair></RightHair>
        </ul>
        <ul>
          <LeftHairBack></LeftHairBack>
          <LeftHairBack></LeftHairBack>
          <LeftHairBack></LeftHairBack>
          <RightHairBack></RightHairBack>
          <RightHairBack></RightHairBack>
          <RightHairBack></RightHairBack>
        </ul>

        <MinionBody>
          <Goggle>
            <StrapLeft></StrapLeft>
            <StrapRight></StrapRight>
            <FrameLeft></FrameLeft>
            <FrameRight></FrameRight>
            <FrameBorderLeft></FrameBorderLeft>
            <FrameBorderRight></FrameBorderRight>
            <EyeLeft ref={eyeLeftRef}>
              <Iris>
                <Pupil></Pupil>
              </Iris>
            </EyeLeft>
            <EyeRight ref={eyeRightRef}>
              <Iris>
                <Pupil></Pupil>
              </Iris>
            </EyeRight>
            <EyeLidsLeft></EyeLidsLeft>
            <EyeLidsRight></EyeLidsRight>
          </Goggle>
          <Mouth></Mouth>
          <Reflection></Reflection>
          <Dungarees></Dungarees>
          <AdjusterTop></AdjusterTop>
          <AdjusterBottomLeft>
            <Thread></Thread>
            <Thread></Thread>
            <Thread></Thread>
            <Thread></Thread>
            <Button></Button>
          </AdjusterBottomLeft>
          <AdjusterBottomRight>
            <Thread></Thread>
            <Thread></Thread>
            <Thread></Thread>
            <Thread></Thread>
            <Button></Button>
          </AdjusterBottomRight>
          <ExposedArmsLeft></ExposedArmsLeft>
          <ExposedArmsRight></ExposedArmsRight>
        </MinionBody>
        <Arm>
          <LeftShoulder>
            <Finger></Finger>
            <Finger></Finger>
            <Finger></Finger>
          </LeftShoulder>
          <LeftGloves></LeftGloves>
        </Arm>
        <Arm>
          <RightShoulder>
            <Finger></Finger>
            <Finger></Finger>
            <Finger></Finger>
          </RightShoulder>
          <RightGloves></RightGloves>
        </Arm>
        <Leg>
          <LegFats></LegFats>
          <LegFats></LegFats>
          <LegFats></LegFats>
          <LegFats></LegFats>
        </Leg>
        <LeftShoe></LeftShoe>
        <RightShoe></RightShoe>
        {/* <Text>
          Meet my personal minion Mac. He is very shy and conscious if you
          invade his space. Nonetheless, he has been a tremendous help in
          teaching me how to code :&#41;
        </Text> */}
      </MinionBodyWrap>
    </Wrap>
  );
}
