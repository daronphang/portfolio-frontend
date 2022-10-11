import modalReducer, { openModal, closeModal } from './modalSlice';

const initialState = {
  name: null,
  onShow: false,
  size: 'small',
};

test('should handle initial state', () => {
  expect(modalReducer(undefined, { type: 'unknown' })).toEqual({
    name: null,
    onShow: false,
    size: 'small',
  });
});

test('should open modal', () => {
  expect(
    modalReducer(
      initialState,
      openModal({ size: 'medium', name: 'SUCCESSFORM' })
    )
  ).toEqual({
    name: 'SUCCESSFORM',
    onShow: true,
    size: 'medium',
  });
});

test('should close modal', () => {
  expect(modalReducer(initialState, closeModal())).toEqual({
    name: null,
    onShow: false,
    size: 'small',
  });
});
