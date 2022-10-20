import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const unit = (val) => `${val}rem`;

const Wrap = styled.div`
  position: relative;
  background: #ffffff;
  margin: auto;
`;

const MinionBodyWrap = styled.div`
  position: absolute;
  height: ${unit(25)};
  width: ${unit(14)};
  left: 30%;
  top: calc(48% - ${unit(12.5)});
`;

const MinionBody = styled.div`
  position: absolute;
  height: ${unit(25)};
  width: ${unit(14)};
  left: calc(50% - ${unit(7)});
  top: calc(48% - ${unit(12.5)});
  background: #ffcb4f;
  border-radius: ${unit(8)} ${unit(8)} ${unit(5)} ${unit(5)};
  overflow: hidden;
  z-index: 1;
`;

const Hair = styled.li`
  list-style: none;
  position: absolute;
  height: ${unit(3)};
  width: ${unit(1.5)};
  margin-top: ${unit(-0.5)};
  z-index: 2;
`;

const LeftHair = styled(Hair)`
  top: ${unit(-0.5)};
  left: ${unit(5)};
  border-radius: 0 90% 0 0;
  border-right: ${unit(0.1)} solid #333333;

  &:nth-child(1) {
    top: ${unit(-0.8)};
  }

  &:nth-child(2) {
    transform: rotate(-15deg);
    left: ${unit(4)};
    top: ${unit(-0.2)};
  }

  &:nth-child(3) {
    left: ${unit(3)};
    top: ${unit(0)};
    transform: rotate(-30deg);
  }

  &:nth-child(4) {
    left: ${unit(2)};
    top: ${unit(0.5)};
    transform: rotate(-45deg);
  }

  &:nth-child(5) {
    left: ${unit(1)};
    top: ${unit(1.5)};
    transform: rotate(-60deg);
  }
`;

const RightHair = styled(Hair)`
  top: ${unit(-0.5)};
  left: ${unit(7.5)};
  border-radius: 80% 0 0 0;
  border-left: ${unit(0.1)} solid #333333;

  &:nth-child(7) {
    left: ${unit(8.5)};
    top: ${unit(-0.2)};
    transform: rotate(15deg);
  }

  &:nth-child(8) {
    left: ${unit(9.5)};
    top: ${unit(0)};
    transform: rotate(30deg);
  }

  &:nth-child(9) {
    left: ${unit(11)};
    top: ${unit(0.5)};
    transform: rotate(45deg);
  }

  &:nth-child(10) {
    left: ${unit(12)};
    top: ${unit(1.5)};
    transform: rotate(60deg);
  }
`;

const LeftHairBack = styled(LeftHair)`
  height: ${unit(1.5)};
  left: ${unit(0.6)};

  &:nth-child(1) {
    top: ${unit(-0.5)};
    left: ${unit(6)};
  }

  &:nth-child(2) {
    left: ${unit(4)};
    top: ${unit(-0.5)};
    transform: rotate(-10deg);
  }

  &:nth-child(3) {
    left: ${unit(0.5)};
    top: ${unit(1.5)};
    transform: rotate(-60deg);
  }
`;

const RightHairBack = styled(RightHair)`
  height: ${unit(1.5)};
  left: ${unit(7)};

  &:nth-child(4) {
    left: ${unit(10)};
    top: ${unit(0)};
    transform: rotate(30deg);
  }

  &:nth-child(5) {
    left: ${unit(12)};
    top: ${unit(1.5)};
    transform: rotate(60deg);
  }
`;

const Goggle = styled.div`
  margin-top: ${unit(6)};
`;

const StrapLeft = styled.div`
  position: absolute;
  height: 0;
  width: ${unit(1.5)};
  border-left: ${unit(0.2)} solid transparent;
  border-right: ${unit(0.2)} solid transparent;
  border-bottom: ${unit(2)} solid #444444;
  margin-top: ${unit(0)};
  margin-left: ${unit(0.1)};
  transform: rotate(-90deg);
`;

const StrapRight = styled(StrapLeft)`
  transform: rotate(90deg);
  margin-left: ${unit(12)};
`;

const FrameLeft = styled.div`
  position: absolute;
  top: ${unit(4)};
  left: ${unit(1.8)};
  border-radius: 100%;
  height: ${unit(4.5)};
  width: ${unit(4.5)};
  border: ${unit(0.5)} solid #cccccc;
`;

const FrameRight = styled(FrameLeft)`
  margin-left: ${unit(5)};
`;

const FrameBorderLeft = styled.div`
  position: absolute;
  border: ${unit(0.3)} solid #666666;
  border-radius: 100%;
  height: ${unit(4.1)};
  width: ${unit(4.1)};
  top: ${unit(4.4)};
  left: ${unit(2.2)};
`;

const FrameBorderRight = styled(FrameBorderLeft)`
  left: ${unit(7.2)};
`;

const EyeLeft = styled.div`
  position: absolute;
  border-radius: 100%;
  height: ${unit(4.1)};
  width: ${unit(4.1)};
  background: #ffffff;
  box-shadow: inset ${unit(0)} ${unit(0.2)} ${unit(0.8)} ${unit(0)} #a0a0a0;
  left: ${unit(2.5)};
  top: ${unit(4.7)};
  transform: rotate(0deg);
`;

const EyeRight = styled(EyeLeft)`
  left: ${unit(7.5)};
`;

const Iris = styled.div`
  position: relative;
  border-radius: 100%;
  background-color: #e7a452;
  width: ${unit(1.5)};
  height: ${unit(1.5)};
  left: ${unit(1)};
  top: ${unit(1)};
`;

const Pupil = styled.div`
  position: relative;
  border-radius: 100%;
  background-color: #333333;
  width: ${unit(0.5)};
  height: ${unit(0.5)};
  left: ${unit(0.5)};
  top: ${unit(0.3)};
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
  height: ${unit(4.1)};
  width: ${unit(4.1)};
  top: ${unit(4.7)};
  animation-name: ${BatEyeLids};
  animation-iteration-count: infinite;
  animation-duration: 5s;

  &:before {
    content: '';
    position: absolute;
    height: ${unit(0.3)};
    width: ${unit(4.1)};
    top: ${unit(2)};
    background: #a29d9d;
  }
`;

const EyeLidsLeft = styled(EyeLids)`
  left: ${unit(2.5)};
`;

const EyeLidsRight = styled(EyeLids)`
  left: ${unit(7.5)};
`;

const Mouth = styled.div`
  position: absolute;
  width: ${unit(7)};
  height: ${unit(3)};
  border-bottom: ${unit(0.4)} solid #de9a33;
  border-radius: 45%;
  margin-top: ${unit(3.2)};
  left: ${unit(3.5)};
`;

const Reflection = styled.div`
  position: absolute;
  width: ${unit(6)};
  height: ${unit(8)};
  background: #ffffff;
  filter: blur(25px);
  opacity: 0.3;
  margin-top: ${unit(3)};
  left: ${unit(2)};
  z-index: 1;
`;

const Dungarees = styled.div`
  position: relative;
  background: #6d9cc6;
  height: ${unit(12)};
  top: ${unit(8)};
`;

const AdjusterTop = styled.div`
  position: absolute;
  height: 0;
  width: ${unit(6)};
  transform: rotate(180deg);
  border-left: ${unit(4)} solid transparent;
  border-right: ${unit(4)} solid transparent;
  border-bottom: ${unit(2.5)} solid #ffcb4f;
  top: ${unit(14)};
`;

const Thread = styled.span`
  position: absolute;
  border-top: ${unit(0.1)} dashed #333333;
`;

const Button = styled.div`
  position: absolute;
  border-radius: 100%;
  background: #333333;
  height: ${unit(0.5)};
  width: ${unit(0.5)};
`;

const Adjuster = styled.div`
  position: absolute;
  height: 0;
  width: 0;
  margin-top: ${unit(-2)};
  border-bottom: ${unit(2.5)} solid #ffcb4f;
  z-index: 3;
`;

const AdjusterBottomLeft = styled(Adjuster)`
  border-right: ${unit(4)} solid transparent;

  & span:nth-child(1) {
    transform: rotate(32deg);
    width: ${unit(6.3)};
    left: ${unit(-0.5)};
    top: ${unit(-0.3)};
  }

  & span:nth-child(2) {
    transform: rotate(32deg);
    width: ${unit(6.3)};
    left: ${unit(-0.5)};
    top: ${unit(1.5)};
  }

  & span:nth-child(3) {
    transform: rotate(90deg);
    width: ${unit(1.8)};
    left: ${unit(4.5)};
    top: ${unit(2.3)};
  }

  & span:nth-child(4) {
    transform: rotate(150deg);
    border-left: ${unit(0.1)} dashed #333333;
    border-right: none;
    border-radius: 50%;
    width: ${unit(4)};
    height: ${unit(4)};
    top: ${unit(4)};
  }

  & div {
    left: ${unit(4.5)};
    top: ${unit(1.7)};
  }
`;

const AdjusterBottomRight = styled(Adjuster)`
  border-left: ${unit(4)} solid transparent;
  margin-left: ${unit(10)};

  & span:nth-child(1) {
    transform: rotate(-32deg);
    width: ${unit(6.3)};
    left: ${unit(-5.8)};
    top: ${unit(-0.3)};
  }

  & span:nth-child(2) {
    transform: rotate(-32deg);
    width: ${unit(6.3)};
    left: ${unit(-5.8)};
    top: ${unit(1.5)};
  }

  & span:nth-child(3) {
    transform: rotate(90deg);
    width: ${unit(1.8)};
    left: ${unit(-6.3)};
    top: ${unit(2.3)};
  }

  & span:nth-child(4) {
    transform: rotate(-150deg);
    border-right: ${unit(0.1)} dashed #333333;
    border-left: none;
    border-radius: 50%;
    width: ${unit(4)};
    height: ${unit(4)};
    left: ${unit(-4.1)};
    top: ${unit(4)};
  }

  & div {
    left: ${unit(-5)};
    top: ${unit(1.7)};
  }
`;

const ExposedArmsLeft = styled.div`\
  position: absolute;
  margin-top: ${unit(0.5)};
  height: ${unit(3)};
  width: ${unit(4)};
  background: #ffcb4f;
  z-index: 3;
`;

const ExposedArmsRight = styled(ExposedArmsLeft)`
  margin-left: ${unit(10)};
`;

const Arm = styled.div``;

const Shoulder = styled.div`
  position: absolute;
  height: ${unit(7)};
  width: ${unit(1.5)};
  border-radius: 50% 50% ${unit(0.5)} ${unit(0.5)};
  background: #ffcb4f;
  top: ${unit(16)};
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    border-radius: 50%;
    height: ${unit(5)};
    width: ${unit(2)};
    background: #ffcb4f;
    top: ${unit(-0.4)};
  }

  &:after {
    content: '';
    position: absolute;
    height: ${unit(3)};
    width: ${unit(0.5)};
    border-radius: 50%;
    top: ${unit(2)};

    z-index: 3;
  }
`;

const Finger = styled.span`
  background: #333333;
  position: absolute;
  height: ${unit(1)};
  width: ${unit(2)};
  border-radius: ${unit(0.5)};
`;

// consists of arm shadow
const LeftShoulder = styled(Shoulder)`
  left: ${unit(-1.4)};

  &:before {
    left: ${unit(0.2)};
  }

  &:after {
    left: ${unit(1.3)};
    box-shadow: inset ${unit(0.2)} 0 ${unit(0.3)} ${unit(-0.1)}
      rgba(0, 0, 0, 0.3);
  }

  & span:nth-child(1) {
    transform: rotate(-80deg);
    margin-left: ${unit(-0.9)};
    margin-top: ${unit(7.5)};
    border-radius: ${unit(0.5)} 0 0 ${unit(0.5)};
  }

  & span:nth-child(2) {
    transform: rotate(90deg);
    margin-left: ${unit(-0.1)};
    margin-top: ${unit(7.6)};
    width: ${unit(2.2)};
  }

  & span:nth-child(3) {
    transform: rotate(65deg);
    margin-left: ${unit(0.7)};
    margin-top: ${unit(7.4)};
    border-radius: 0 ${unit(0.5)} ${unit(0.5)} 0;
  }
`;

const RightShoulder = styled(Shoulder)`
  left: ${unit(13.9)};

  &:before {
    left: ${unit(-0.7)};
  }

  &:after {
    left: ${unit(-0.3)};
    box-shadow: inset ${unit(-0.2)} 0 ${unit(0.3)} ${unit(-0.1)}
      rgba(0, 0, 0, 0.3);
  }

  & span:nth-child(1) {
    transform: rotate(-65deg);
    margin-left: ${unit(-1.1)};
    margin-top: ${unit(7.5)};
    border-radius: ${unit(0.5)} 0 0 ${unit(0.5)};
  }

  & span:nth-child(2) {
    transform: rotate(90deg);
    margin-left: ${unit(-0.4)};
    margin-top: ${unit(7.6)};
    width: ${unit(2.2)};
  }

  & span:nth-child(3) {
    transform: rotate(80deg);
    margin-left: ${unit(0.5)};
    margin-top: ${unit(7.4)};
    border-radius: 0 ${unit(0.5)} ${unit(0.5)} 0;
  }
`;

const Gloves = styled.div`
  position: absolute;
  background: #333333;
  height: ${unit(2)};
  width: ${unit(2)};
  border-radius: 40%;
  top: ${unit(22.2)};
`;

const LeftGloves = styled(Gloves)`
  left: ${unit(-1.6)};
`;

const RightGloves = styled(Gloves)`
  left: ${unit(13.7)};
`;

const Leg = styled.div`
  position: absolute;
  z-index: 0;
  height: 0;
  width: ${unit(4.5)};
  top: ${unit(24)};
  margin-left: ${unit(3.3)};
  border-left: ${unit(1.5)} solid transparent;
  border-right: ${unit(1.5)} solid transparent;
  border-bottom: ${unit(3)} solid #4b6587;
  transform: rotate(180deg);

  &:before {
    content: '';
    position: absolute;
    background: #7fa3b8;
    height: ${unit(4)};
    width: ${unit(1)};
    left: ${unit(1.7)};
    top: ${unit(0)};
  }

  & span:nth-child(1) {
    left: ${unit(2.5)};
    top: ${unit(0.5)};
  }

  & span:nth-child(2) {
    left: ${unit(2.9)};
    top: ${unit(-0.6)};
    height: ${unit(2.2)};
    width: ${unit(1.8)};
    transform: rotate(90deg);
    border-radius: 40%;
  }

  & span:nth-child(3) {
    top: ${unit(0.6)};
  }

  & span:nth-child(4) {
    left: ${unit(-0.2)};
    top: ${unit(-0.6)};
    height: ${unit(2.2)};
    width: ${unit(1.8)};
    transform: rotate(90deg);
    border-radius: 40%;
  }
`;

const LegFats = styled.span`
  position: absolute;
  height: ${unit(2)};
  width: ${unit(2)};
  border-radius: 40%;
  background: #4b6587;
`;

const Shoe = styled.div`
  position: absolute;
  height: ${unit(1.5)};
  width: ${unit(2)};
  background: #333333;
  top: ${unit(26.6)};
  left: ${unit(6.5)};
  border-radius: 30%;

  &:before {
    content: '';
    position: absolute;
    height: ${unit(1.5)};
    width: ${unit(1.5)};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background: #333333;
  }
`;

const LeftShoe = styled(Shoe)`
  margin-left: ${unit(1)};

  &:before {
    border-top-left-radius: 0;
    border-top-right-radius: 100%;
    left: ${unit(1.4)};
  }
`;

const RightShoe = styled(Shoe)`
  margin-left: ${unit(-1.8)};

  &:before {
    left: ${unit(-0.8)};
    border-top-left-radius: 100%;
    border-top-right-radius: 0;
  }
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
      </MinionBodyWrap>
    </Wrap>
  );
}
