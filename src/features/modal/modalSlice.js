import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    name: null,
    onShow: false,
    size: 'small',
  },
  reducers: {
    openModal: (state, action) => {
      state.name = action.payload.name;
      state.size = action.payload.size;
      state.onShow = true;
    },
    closeModal: (state) => {
      state.name = null;
      state.onShow = false;
    },
  },
});

export const selectModalName = (state) => state.modal.name;
export const selectModalShow = (state) => state.modal.onShow;
export const selectModalSize = (state) => state.modal.size;

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
