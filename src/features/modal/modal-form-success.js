import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';

import { standardStyles, mediaQuery, mediaSizes } from '../../utils/styles';
import Button from '../../components/buttons/button';
import { closeModal } from './modalSlice';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  ${mediaQuery(
    'mobile',
    `
    font-size: ${standardStyles.fontSizeNormal};
`
  )};
  ${mediaQuery(
    'tablet',
    `
    font-size: ${standardStyles.fontSizeMedium};
`
  )};
  ${mediaQuery(
    'laptop',
    `
    font-size: ${standardStyles.fontSizeMedium};
`
  )};

  ${mediaQuery(
    'desktop',
    `
    font-size: ${standardStyles.fontSizeMedium};
`
  )};
`;

const CheckWrap = styled.div`
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mediaQuery(
    'mobile',
    `
    width: 8rem;
    height: 8rem;
`
  )};
  ${mediaQuery(
    'tablet',
    `
    width: 11rem;
    height: 11rem;
`
  )};
  ${mediaQuery(
    'laptop',
    `
    width: 11rem;
    height: 11rem;
`
  )};

  ${mediaQuery(
    'desktop',
    `
    width: 11rem;
    height: 11rem;
`
  )};
`;

/*
 idea is to use box-shadows
 At 0%, have 4 quarter cirlce at the same position
 first rotation involves 1st circle with X1 coordinates
 second rotation involves 1st circle with x2, 2nd circle with x1 coordinates, both at the same time
 this is to ensure the drawing of circle doesn't break
 third rotation involves 1st circle with x3, 2nd circle with x2, 3rd circle with x1 coordinates
*/

const drawCircle = keyframes`
0% {
    box-shadow: 5rem -5rem 0 0.2rem green, 5rem -5rem 0 0.2rem green, 5rem -5rem 0 0.2rem green, 5rem -5rem 0 0.2rem green;
}
25% {
    box-shadow: 5rem -5rem 0 0.2rem green, 5rem -5rem 0 0.2rem green, 5rem -5rem 0 0.2rem green, 5rem -5rem 0 0.2rem green;
}
50% {
    box-shadow: -5rem -5rem 0 0.2rem green, 5rem -5rem 0 0.2rem green, 5rem -5rem 0 0.2rem green, 5rem -5rem 0 0.2rem green;
}

75% {
    box-shadow: -5rem 5rem 0 0.2rem green, -5rem -5rem 0 0.2rem green, 5rem -5rem 0 0.2rem green, 5rem -5rem 0 0.2rem green;
}

100% {
    box-shadow: 5rem 5rem 0 0.2rem green, -5rem 5rem 0 0.2rem green, -5rem -5rem 0 0.2rem green, 5rem -5rem 0 0.2rem green;
}
`;

const drawCircleMobile = keyframes`
0% {
    box-shadow: 3rem -3rem 0 0.2rem green, 3rem -3rem 0 0.2rem green, 3rem -3rem 0 0.2rem green, 3rem -3rem 0 0.2rem green;
}
25% {
    box-shadow: 3rem -3rem 0 0.2rem green, 3rem -3rem 0 0.2rem green, 3rem -3rem 0 0.2rem green, 3rem -3rem 0 0.2rem green;
}
50% {
    box-shadow: -3rem -3rem 0 0.2rem green, 3rem -3rem 0 0.2rem green, 3rem -3rem 0 0.2rem green, 3rem -3rem 0 0.2rem green;
}

75% {
    box-shadow: -3rem 3rem 0 0.2rem green, -3rem -3rem 0 0.2rem green, 3rem -3rem 0 0.2rem green, 3rem -3rem 0 0.2rem green;
}

100% {
    box-shadow: 3rem 3rem 0 0.2rem green, -3rem 3rem 0 0.2rem green, -3rem -3rem 0 0.2rem green, 3rem -3rem 0 0.2rem green;
}
`;

// const drawCircle = keyframes`
// 0% {
//     box-shadow: 5vh 5vh 0 0.2vh white, -5vh 5vh 0 0.2vh white, -5vh -5vh 0 0.2vh white, 5vh -5vh 0 0.2vh white, 0 0 0 0.2vh green;
// }
// 25% {
//     box-shadow: 5vh 5vh 0 0.2vh white, -5vh 5vh 0 0.2vh white, -5vh -5vh 0 0.2vh white, -5vh -5vh 0 0.2vh white, 0 0 0 0.2vh green;
// }
// 50% {
//     box-shadow: 5vh 5vh 0 0.2vh white, -5vh 5vh 0 0.2vh white, -5vh 5vh 0 0.2vh white, -5vh 5vh 0 0.2vh white, 0 0 0 0.2vh green;
// }

// 75% {
//     box-shadow: 5vh 5vh 0 0.2vh white, 5vh 5vh 0 0.2vh white, 5vh 5vh 0 0.2vh white, 5vh 5vh 0 0.2vh white, 0 0 0 0.2vh green;
// }

// 100% {
//     box-shadow: 5vh 5vh 0 0.2vh white, 5vh 5vh 0 0.2vh white, 5vh 5vh 0 0.2vh white, 5vh 5vh 0 0.2vh white, 0 0 0 0.2vh green;
// }
// `;

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;

  @media (min-width: ${mediaSizes.mobile}) {
    height: 7rem;
    width: 7rem;
    animation: ${drawCircleMobile} 0.5s linear forwards;
  }

  @media (min-width: ${mediaSizes.tablet}) {
    height: 10rem;
    width: 10rem;
    animation: ${drawCircle} 0.5s linear forwards;
  }

  @media (min-width: ${mediaSizes.laptop}) {
    height: 10rem;
    width: 10rem;
    animation: ${drawCircle} 0.5s linear forwards;
  }

  @media (min-width: ${mediaSizes.desktop}) {
    height: 10rem;
    width: 10rem;
    animation: ${drawCircle} 0.5s linear forwards;
  }
`;

const growShrinkCheck = keyframes`
    20% {
        opacity: 1;
        transform: scale(0.7);
    }

    80% {
        opacity: 1;
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
`;

const Check = styled(FontAwesomeIcon)`
  color: green;
  animation: ${growShrinkCheck} 0.5s forwards;
  animation-delay: 0.5s;
  opacity: 0;

  ${mediaQuery(
    'mobile',
    `
    font-size: 5rem;
`
  )};
  ${mediaQuery(
    'tablet',
    `
    font-size: 7rem;
`
  )};
  ${mediaQuery(
    'laptop',
    `
    font-size: 7rem;
`
  )};

  ${mediaQuery(
    'desktop',
    `
    font-size: 8rem;
`
  )};
`;

export default function ModalFormSuccess() {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Wrap role="modal" aria-label="modal-form-success">
      <CheckWrap>
        <Circle />
        <Check icon="fa-check" />
      </CheckWrap>

      <div id="success-form-text">Form has been submitted!</div>
      <br />
      <Button variant="secondary" handleClick={handleClose}>
        Close
      </Button>
    </Wrap>
  );
}
