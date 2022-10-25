import React, { forwardRef, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { standardStyles, mediaQuery } from '../utils/styles';

// for input focus to target label, label must be AFTER input tag
// input:focus + label

const Wrap = styled.div`
  position: relative;
`;

const InputWrap = styled.div`
  position: relative;
  border-radius: 1rem;
  font-weight: 600;
`;

const Label = styled.label`
  position: absolute;
  transition: 0.5s;

  ${mediaQuery(
    'mobile',
    `
    left: -1rem;
    top: -1.5rem;
    font-size: ${standardStyles.fontSizeVerySmall};
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    left: -1.5rem;
    top: -2rem;
    font-size: ${standardStyles.fontSizeSmall};
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    left: -2rem;
    top: -2.5rem;
    font-size: ${standardStyles.fontSizeNormal};
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    left: -2rem;
    top: -3rem;
    font-size: ${standardStyles.fontSizeMedium};
  `
  )};
`;

// invalid and valid pseudo classes are used as react-hook-form
// cannot validate different input types i.e. email

const invalidInput = keyframes`
25% {transform: skew(-10deg)}
50% {transform: skew(10deg)}
75% {transform: skew(-10deg)}
100% {transform: skew(-0deg)}
`;

const handleValidation = (isTouched, invalid, type) => {
  if (isTouched) {
    if (invalid)
      return css`
        animation: ${invalidInput} 0.3s forwards;
        background-color: ${type === 'span' ? '#f0755f' : 'none'};
      `;
    return css`
      background-color: ${type === 'span' ? '#9ddf9f' : 'none'};
    `;
  }
  return 'none';
};

const inputStyles = css`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: ${standardStyles.quinaryColor};
  border: none;
  z-index: 5;

  ${mediaQuery(
    'mobile',
    `
    border-radius: 0.5rem;
    padding: 0.8rem;
    font-size: ${standardStyles.fontSizeVerySmall};
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    border-radius: 0.7rem;
    padding: 1.1rem;
    font-size: ${standardStyles.fontSizeSmall};
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    border-radius: 1rem;
    padding: 1.3rem;
    font-size: ${standardStyles.fontSizeNormal};
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    border-radius: 1rem;
    padding: 1.6rem;
    font-size: ${standardStyles.fontSizeMedium};
  `
  )};

  &::placeholder {
    transition: 0.5s;
  }

  &:focus {
    outline: none;
  }

  &:focus::placeholder {
    color: transparent;
  }

  &:focus + label {
    opacity: 1;

    ${mediaQuery(
      'mobile',
      `
      transform: translateX(1.5rem);
    `
    )};
    ${mediaQuery(
      'tablet',
      `
      transform: translateX(2rem);
    `
    )};
    ${mediaQuery(
      'laptop',
      `
      transform: translateX(3rem);
    `
    )};

    ${mediaQuery(
      'desktop',
      `
      transform: translateX(3rem);
    `
    )};
  }

  &:focus + label svg {
    opacity: 1;
  }

  &:valid {
    ${(props) => handleValidation(props.isTouched, props.invalid, 'input')};
  }

  &:valid + label + span {
    ${(props) => handleValidation(props.isTouched, props.invalid, 'span')};
  }
`;

const Input = styled.input`
  ${inputStyles}
`;

const TextArea = styled.textarea`
  ${inputStyles}
  resize: none;
  vertical-align: top;
`;

const Icon = styled(FontAwesomeIcon)`
  opacity: 0;
  transition: 0.5s;

  ${mediaQuery(
    'mobile',
    `
    margin-right: 0.5rem;
    font-size: ${standardStyles.fontSizeVerySmall};
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    margin-right: 0.7rem;
    font-size: ${standardStyles.fontSizeSmall};
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    margin-right: 1rem;
    font-size: ${standardStyles.fontSizeNormal};
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    margin-right: 1rem;
    font-size: ${standardStyles.fontSizeMedium};
  `
  )};
`;

const Validation = styled.span`
  position: absolute;
  box-sizing: border-box;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 0;
  border-radius: 1rem 0 0 1rem;
  transition: 0.5s;

  ${mediaQuery(
    'mobile',
    `
    width: 0.5rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    width: 0.8rem;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    width: 1rem;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    width: 1rem;
  `
  )};
`;

const ErrorMsg = styled.div`
  color: red;
  opacity: 1;
  font-family: JetBrains;
  font-weight: 600;
  word-spacing: -0.5rem;
  font-size: ${standardStyles.fontSizeVerySmall};
`;

const InputField = forwardRef(function renderInputField(props, ref) {
  const { isDirty, isTouched, invalid, error } = props.getFieldState;

  return (
    <Wrap>
      <InputWrap styles={props.styles}>
        {props.type !== 'textarea' && (
          <Input
            type={props.type}
            id={props.id}
            placeholder={props.placeholder}
            onChange={props.onChange}
            onBlur={props.onBlur}
            name={props.name}
            ref={ref}
            styles={props.styles}
            isTouched={isTouched || props.isSubmitted}
            invalid={invalid}
            maxLength={props.maxLength}
          />
        )}
        {props.type === 'textarea' && (
          <TextArea
            spellCheck
            id={props.id}
            placeholder={props.placeholder}
            onChange={props.onChange}
            onBlur={props.onBlur}
            name={props.name}
            maxLength={props.maxLength}
            ref={ref}
            styles={props.styles}
            isTouched={isTouched || props.isSubmitted}
            invalid={invalid}
            rows={props.rows}
          ></TextArea>
        )}
        <Label htmlFor={props.id}>
          <Icon icon={props.icon}></Icon>
          {props.label}
        </Label>
        <Validation />
      </InputWrap>

      {/* {invalid && <ErrorMsg>{props.errorMsg}</ErrorMsg>} */}
    </Wrap>
  );
});

export default InputField;
