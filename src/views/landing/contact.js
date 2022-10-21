import React, { useRef } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';

import { standardStyles, mediaQuery } from '../../utils/styles';
import InputField from '../../components/input';
import Button from '../../components/buttons/button';
import GlassMorphism from '../../components/glassmorphism';
import useAxiosRequest from '../../hooks/useAxiosRequest';
import { openModal } from '../../features/modal/modalSlice';
import { handleApi } from '../../utils/apis';

const Wrap = styled.div`
  position: relative;
  box-sizing: border-box;
  margin-top: -1%;
  min-height: 110vh;
  padding: 5rem 0 5rem 0;
  width: 100%;
  background: ${standardStyles.colorPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${standardStyles.fontColorPrimary};
`;

const GlassWrap = styled.div`
  ${mediaQuery(
    'mobile',
    `
    width: 35rem;
`
  )};
  ${mediaQuery(
    'tablet',
    `
    width: 80rem;
`
  )};
  ${mediaQuery(
    'laptop',
    `
    width: 100rem;
`
  )};

  ${mediaQuery(
    'desktop',
    `
    width: 100rem;
`
  )};
`;

const ContactWrap = styled.div.attrs((props) => ({
  style: {
    opacity: 1, // Math.min(1, ((props.ratio || 0) - 0.3) * 3)
  },
}))`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  text-align: center;
  width: 100%;

  ${mediaQuery(
    'mobile',
    `
    font-size: ${standardStyles.fontSizeSmall};
    padding: 0.5rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    font-size: ${standardStyles.fontSizeMedium};
    padding: 5rem;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    font-size: ${standardStyles.fontSizeMedium};
    padding: 5rem;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    font-size: ${standardStyles.fontSizeMedium};
    padding: 5rem;
  `
  )};
`;

const TextGrid = styled.div`
  display: grid;
  position: relative;

  ${mediaQuery(
    'mobile',
    `
    grid-template-columns: 10rem auto;
    margin-top: 2rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    grid-template-columns: 20rem auto;
    margin-top: 4rem;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    grid-template-columns: 30rem auto;
    margin-top: 5rem;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    grid-template-columns: 30rem auto;
    margin-top: 5rem;
  `
  )};
`;

const PersonalDetails = styled.div`
  display: flex;
  flex-direction: column;
  transition: 1s;
  gap: 1rem;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

const ButtonWrap = styled.div`
  ${mediaQuery(
    'mobile',
    `
    margin-top: 1.5rem;
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    margin-top: 3rem;
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    margin-top: 3rem;
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    margin-top: 3rem;
  `
  )};
`;

const Heading = styled.div`
  text-align: left;

  ${mediaQuery(
    'mobile',
    `
    font-size: ${standardStyles.fontSizeMedium};
  `
  )};
  ${mediaQuery(
    'tablet',
    `
    font-size: ${standardStyles.fontSizeLarge};
  `
  )};
  ${mediaQuery(
    'laptop',
    `
    font-size: ${standardStyles.fontSizeVeryLarge};
  `
  )};

  ${mediaQuery(
    'desktop',
    `
    font-size: ${standardStyles.fontSizeVeryLarge};
  `
  )};
`;

const InputFields = [
  {
    type: 'text',
    placeholder: 'Required*',
    label: 'Name',
    key: 'contact_name',
    errorMsg: 'Please enter your fullname.',
    icon: 'fa-solid fa-user',
    required: true,
    pattern: /^[a-zA-Z ]{3,}$/,
    maxLength: 250,
  },
  {
    type: 'text',
    placeholder: 'Required*',
    label: 'Email',
    key: 'email',
    errorMsg: 'Please enter your email address.',
    icon: 'fa-solid fa-envelope',
    required: true,
    pattern: /^[a-zA-Z0-9_.$!%#&*+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    maxLength: 250,
  },
  {
    type: 'text',
    placeholder: 'Required*',
    label: 'Subject',
    key: 'subject',
    icon: 'fa-solid fa-building',
    required: true,
    maxLength: 250,
  },
];

const defaultValues = {
  contact_name: null,
  email: null,
  subject: null,
  message: null,
};

export default function UserContact({ mockCallback }) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const payload = useRef(null);
  const {
    register,
    getFieldState,
    handleSubmit,
    reset,
    formState: { touchedFields, isValid, errors, isSubmitted },
  } = useForm({
    defaultValues,
    mode: 'onTouched', // default is onSubmit for validation to trigger
  });

  const resCallback = () => {
    // open modal
    dispatch(openModal({ size: 'medium', name: 'SUCCESSFORM' }));
    reset(defaultValues);
  };

  const errCallback = (errMsg) => {
    enqueueSnackbar(errMsg, {
      variant: 'error',
      autoHideDuration: 5000,
    });
  };

  const [_, isLoading, triggerRequest] = useAxiosRequest(
    'POST',
    handleApi('CONTACT_ME'),
    payload.current,
    resCallback,
    errCallback
  );

  const renderInputFields = InputFields.map((meta) => (
    <InputField
      key={meta.key}
      id={meta.key}
      label={meta.label}
      placeholder={meta.placeholder}
      type={meta.type}
      {...register(meta.key, {
        required: meta.required,
        pattern: meta.pattern,
      })}
      icon={meta.icon}
      errorMsg={meta.errorMsg}
      isTouched={touchedFields[meta.key] || isSubmitted}
      getFieldState={getFieldState(meta.key)}
      isSubmitted={isSubmitted}
      maxLength={meta.maxLength}
    />
  ));
  123;

  const onSubmit = (data) => {
    payload.current = data;
    if (mockCallback) mockCallback(data);
    triggerRequest();
  };

  const onError = (e) => {
    const element = document.getElementById('contactMeButton');
    if (element) {
      element.style.animationName = 'buttonOnError';
    }
  };

  return (
    <Wrap id="contact">
      <GlassWrap>
        <GlassMorphism>
          <ContactWrap>
            <Heading>Send me a message.</Heading>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <TextGrid>
                <PersonalDetails>{renderInputFields}</PersonalDetails>
                <InputField
                  {...register('message', {
                    required: true,
                  })}
                  label="Message"
                  id="message"
                  placeholder="Maximum of 250 characters allowed, Required*"
                  icon="fa-solid fa-message"
                  isTouched={touchedFields['message']}
                  getFieldState={getFieldState('message')}
                  isSubmitted={isSubmitted}
                  type="textarea"
                  rows={9}
                  maxLength={250}
                />
              </TextGrid>
              <ButtonWrap>
                <Button
                  id="contactMeButton"
                  variant="primary"
                  isLoading={isLoading}
                  type="submit"
                >
                  Submit
                </Button>
              </ButtonWrap>
            </form>
          </ContactWrap>
        </GlassMorphism>
      </GlassWrap>
    </Wrap>
  );
}
