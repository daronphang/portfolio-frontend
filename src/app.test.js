import React from 'react';
import { act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';
import { openModal, closeModal } from './features/modal/modalSlice';
import { renderWithContext } from './features/test-utils';

// mocking modules
jest.mock('@fortawesome/fontawesome-svg-core');
jest.mock('@fortawesome/free-brands-svg-icons');
jest.mock('@fortawesome/free-solid-svg-icons');
jest.mock('./views/landing/landing', () => ({
  __esModule: true,
  default: () => {
    return <div>LandingPageMock</div>;
  },
}));
jest.mock('./components/navbar/navbar', () => ({
  __esModule: true,
  default: () => {
    return <div>NavigationBarMock</div>;
  },
}));
jest.mock('./features/modal/modal', () => ({
  __esModule: true,
  default: () => {
    return <div>ModalMock</div>;
  },
}));

it('should show navbar without routing', () => {
  const { getByText } = renderWithContext(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(getByText(/NavigationBarMock/i)).toBeTruthy();
});

it('should show landing page when routed', () => {
  const { getByText } = renderWithContext(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(getByText(/LandingPageMock/i)).toBeTruthy();
});

it('should show modal and remove when closed', () => {
  const { store, getByText, queryByText } = renderWithContext(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(queryByText(/ModalMock/i)).toBeFalsy();

  act(() => store.dispatch(openModal({ size: 'medium', name: 'SUCCESSFORM' })));
  expect(getByText(/ModalMock/i)).toBeTruthy();

  act(() => store.dispatch(closeModal()));
  expect(queryByText(/ModalMock/i)).toBeFalsy();
});
