import React from 'react';
import { act, fireEvent } from '@testing-library/react';

import Modal from './modal';
import { renderWithContext } from '../test-utils';
import { openModal } from './modalSlice';

// mocking modules
jest.mock('@fortawesome/react-fontawesome');

const state = {
  modal: {
    name: 'SUCCESSFORM',
    onShow: true,
    size: 'small',
  },
};

const emptyState = {
  modal: {
    name: null,
    onShow: false,
    size: 'small',
  },
};

test('backdrop should close upon click', () => {
  const { store, getByRole, queryByRole } = renderWithContext(
    <Modal clickable={true} />,
    state
  );

  expect(getByRole('presentation', { name: /backdrop/i })).toBeTruthy();
  expect(getByRole('modal', { name: /modal-form-success/i })).toBeTruthy();

  fireEvent.click(getByRole('presentation', { name: /backdrop/i }));
  expect(store.getState().modal.onShow).toBeFalsy();
  expect(store.getState().modal.name).toBeFalsy();
  expect(queryByRole('modal', { name: /modal-form-success/i })).toBeFalsy();
});

test('backdrop should not close upon click', () => {
  const { store, getByRole } = renderWithContext(
    <Modal clickable={false} />,
    state
  );

  fireEvent.click(getByRole('presentation', { name: /backdrop/i }));
  expect(store.getState().modal.onShow).toBeTruthy();
  expect(store.getState().modal.name).toBeTruthy();
  expect(getByRole('modal', { name: /modal-form-success/i })).toBeTruthy();
});

test('success form should show upon dispatching action', () => {
  const { store, getByRole, queryByRole } = renderWithContext(
    <Modal clickable={false} />,
    emptyState
  );
  expect(queryByRole('modal', { name: /modal-form-success/i })).toBeFalsy();

  // act as there is state update
  act(() => store.dispatch(openModal({ size: 'medium', name: 'SUCCESSFORM' })));
  expect(store.getState().modal.onShow).toBeTruthy();
  expect(store.getState().modal.name).toEqual('SUCCESSFORM');
  expect(getByRole('modal', { name: /modal-form-success/i })).toBeTruthy();
});
