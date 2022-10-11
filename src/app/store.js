import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import modalReducer from '../features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
  },
});
