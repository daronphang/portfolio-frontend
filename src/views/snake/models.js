import styled from 'styled-components';

import { mediaQuery, standardStyles } from '../../utils/styles';

export const NODE_SIZES = {
  EXTRA_SMALL: 0.7,
  SMALL: 1,
  MEDIUM: 1.5,
  LARGE: 1.7,
};

export const GAME_STATES = {
  MENU: 'MENU',
  DIFFICULTY: 'DIFFICULTY',
  START: 'START',
  WIN: 'WIN',
  GAMEOVER: 'GAMEOVER',
};

export const DIFFICULTY = {
  EASY: 125,
  MEDIUM: 80,
  HARD: 50,
};

export const Menu = styled.div`
  text-align: center;
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${mediaQuery(
    'ios',
    `
    left: calc(50% - 25rem);
    top: calc(50% - 5rem);
    width: 50rem;
    height: 10rem;
    `
  )};
  ${mediaQuery(
    'android',
    `
    left: calc(50% - 25rem);
    top: calc(50% - 5rem);
    width: 50rem;
    height: 10rem;
    `
  )};
  ${mediaQuery(
    'tablet',
    `
    left: calc(50% - 20rem);
    top: calc(50% - 5rem);
    width: 40rem;
    height: 10rem;
    `
  )};
  ${mediaQuery(
    'laptop',
    `
    left: calc(50% - 25rem);
    top: calc(50% - 5rem);
    width: 50rem;
    height: 10rem;
    `
  )};

  ${mediaQuery(
    'desktop',
    `
    left: calc(50% - 25rem);
    top: calc(50% - 5rem);
    width: 50rem;
    height: 10rem;
    `
  )};
`;

export const Header = styled.div`
  font-family: RetroGaming;
  margin-bottom: 3rem;
  ${mediaQuery(
    'ios',
    `
    font-size: 2rem;
    `
  )};
  ${mediaQuery(
    'android',
    `
    font-size: 2rem;
    `
  )};
  ${mediaQuery(
    'tablet',
    `
    font-size: 2rem;
    `
  )};
  ${mediaQuery(
    'laptop',
    `
    font-size: 3rem;
    `
  )};

  ${mediaQuery(
    'desktop',
    `
    font-size: 3rem;
    `
  )};
`;

export const Button = styled.button.attrs((props) => ({
  className: props.id === props.activeId ? 'active' : '',
}))`
  all: unset;
  font-family: RetroGaming;
  margin-bottom: 1rem;
  width: fit-content;
  text-align: center;
  position: relative;
  color: #b6b6b2;

  &.active {
    color: ${standardStyles.colorPrimary};
  }

  &.active:before {
    content: '';
    position: absolute;
    font-size: 2.5rem;
    border: solid ${standardStyles.colorPrimary};
    border-width: 0 0.3rem 0.3rem 0;
    display: inline-block;
    padding: 0.3rem;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    left: -1.7rem;
    top: 0.4rem;
  }

  &.active:after {
    content: '';
    position: absolute;
    font-size: 2.5rem;
    border: solid ${standardStyles.colorPrimary};
    border-width: 0 0.3rem 0.3rem 0;
    display: inline-block;
    padding: 0.3rem;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    right: -1.7rem;
    top: 0.4rem;
  }
`;
