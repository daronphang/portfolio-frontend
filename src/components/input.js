import React, { forwardRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { standardStyles } from '../utils/styles';

// for input focus to target label, label must be AFTER input tag
// input:focus + label

const Wrap = styled.div`
  position: relative;
  padding: 3rem 1rem 1rem 1rem;
  min-height: 5rem;
`;

const InputWrap = styled.div`
  position: relative;
  border-radius: 1rem;
  font-weight: 600;
  height: ${(props) => (props.styles?.height ? props.styles.height : '100%')};
`;

const Label = styled.label`
  position: absolute;
  font-size: ${standardStyles.fontSizeMedium};
  transition: 0.5s;
  left: -2rem;
  top: -3rem;
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
  display: absolute;
  width: 100%;
  height: 5rem;
  background: ${standardStyles.quinaryColor};
  border: none;
  border-radius: 1rem;
  z-index: 5;
  padding: 1.5rem;
  font-size: ${standardStyles.fontSizeMedium};

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
    transform: translateX(3rem);
    opacity: 1;
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
  height: ${(props) => (props.styles?.height ? props.styles.height : '100%')};
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: ${standardStyles.fontSizeMedium};
  opacity: 0;
  margin-right: 1rem;
  transition: 0.5s;
`;

const Validation = styled.span`
  position: absolute;
  box-sizing: border-box;
  width: 1rem;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 0;
  border-radius: 1rem 0 0 1rem;
  transition: 0.5s;
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
