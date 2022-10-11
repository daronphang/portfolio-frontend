import React from 'react';
import { render, act, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactMe from '../contact-me';

/*
DEFINING TEST CASES:
1. All input fields are present and submitting empty form will not trigger an API call.
2. Invalid fields will be marked as red while valid fields as green.
3. If form is valid upon submission, should trigger an API call with form details as payload.

ADDITIONAL NOTES:
1. Do not need to test for success/failure callbacks as this is unittested in custom hook.
*/

// mocking modules
jest.mock('@fortawesome/react-fontawesome');
jest.mock('notistack', () => ({
  useSnackbar: () => {
    return {
      enqueueSnackbar: jest.fn((type, obj) => {}),
    };
  },
}));
jest.mock('react-redux', () => ({
  useDispatch: () => {
    return jest.fn();
  },
}));
jest.mock('../../../features/modal/modalSlice');
jest.mock('../../../hooks/useAxiosRequest', () => ({
  __esModule: true,
  default: (method, url, payload, resCallback, errCallback, options) => [
    null,
    null,
    jest.fn(),
  ],
}));

const mockCallback = jest.fn((data) => {});
const formData = {
  name: 'testname',
  email: 'test@gmail.com',
  company: 'micron',
  message: 'hello world!',
};

let name;
let email;
let company;
let message;
let submit;

const cleanup = () => {
  name = null;
  email = null;
  company = null;
  message = null;
  submit = null;
};

beforeEach(() => {
  const { getByLabelText, getByRole } = render(
    <ContactMe mockCallback={mockCallback} />
  );
  name = getByLabelText('name');
  email = getByLabelText('email');
  company = getByLabelText('company');
  message = getByLabelText('message');
  submit = getByRole('button', { name: /contactMeButton/i });
});

afterEach(() => cleanup());

test('should not submit when fields are empty', async () => {
  expect(name).toBeTruthy();
  expect(email).toBeTruthy();
  expect(company).toBeTruthy();
  expect(message).toBeTruthy();
  expect(submit).toBeTruthy();

  // all fields are empty
  await waitFor(() => userEvent.click(submit));
  expect(mockCallback).not.toBeCalled();
});

test('should not submit when name field is invalid', async () => {
  await waitFor(() =>
    fireEvent.input(name, {
      target: {
        value: 'hi',
      },
    })
  );
  await waitFor(() => userEvent.click(submit));
  expect(name.value).toEqual('hi');
  expect(mockCallback).not.toBeCalled();
});

test('should not submit when email field is invalid', async () => {
  await waitFor(() =>
    fireEvent.input(email, {
      target: {
        value: 'hi',
      },
    })
  );
  await waitFor(() => userEvent.click(submit));
  expect(email.value).toEqual('hi');
  expect(mockCallback).not.toBeCalled();
});

test('should submit when fields are valid', async () => {
  await waitFor(() => {
    fireEvent.input(name, {
      target: {
        value: formData.name,
      },
    });

    fireEvent.input(email, {
      target: {
        value: formData.email,
      },
    });
  });
  expect(name.value).toEqual('testname');
  expect(email.value).toEqual('test@gmail.com');
  await waitFor(() => userEvent.click(submit));
  expect(mockCallback).toBeCalledTimes(1);
});
