import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import modalReducer from './modal/modalSlice';

function createTestStore(preloadedState) {
  return configureStore({
    reducer: {
      modal: modalReducer,
    },
    preloadedState,
  });
}

export function renderWithContext(element, state) {
  const store = createTestStore(state);
  const utils = render(<Provider store={store}>{element}</Provider>);
  return { store, ...utils };
}
