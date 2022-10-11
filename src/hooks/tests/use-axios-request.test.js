import axios from 'axios';
import { renderHook, act, waitFor } from '@testing-library/react';

import useAxiosRequest from '../useAxiosRequest';

/*
DEFINING TEST CASES:
1. When triggerRequest is called, expect specified method (GET/PUt/POST/DELETE) to be called.
2. Returns response if successful, error on failure.
3. If successCallback and errCallback functions are provided, expect to receive res/err as arguments.
4. If aborted, expect controller.signal.aborted to be true, and no updates to isLoading.

ADDITIONAL NOTES:
1. Custom hook returns result.current as an array [data, isLoading, triggerRequest]
2. isLoading is not tested as it is more of an implementation detail than functionality
*/

const url = 'http://mock';
const resp = {
  data: 'world',
};
const error = {
  message: 'error message',
};

test('the response and resCallback are working correctly', async () => {
  jest.spyOn(axios, 'get').mockResolvedValue(resp);
  const mockCallback = jest.fn((res) => res);

  const { result, unmount } = renderHook(() =>
    useAxiosRequest('GET', url, null, mockCallback)
  );

  // initial checks
  expect(result.current[0]).toBeNull();
  expect(result.current[1]).toBeFalsy();

  // trigger request
  act(() => result.current[2]());

  await waitFor(() => {
    expect(axios.get).toBeCalledTimes(1);
    expect(result.current[0]).toBe('world');
    expect(mockCallback).toBeCalledTimes(1);
    expect(mockCallback).toReturnWith('world');
  });
});

test('the message is returned on error', async () => {
  jest.spyOn(axios, 'get').mockRejectedValue(error);
  const mockCallback = jest.fn((res) => res);

  const { result, unmount } = renderHook(() =>
    useAxiosRequest('GET', url, null, null, mockCallback)
  );

  act(() => result.current[2]());

  await waitFor(() => {
    expect(result.current[0]).toBe(null);
    expect(mockCallback).toBeCalledTimes(1);
    expect(mockCallback).toReturnWith(error.message);
  });
});

test('isLoading and callback are not updated on abort', async () => {
  jest.spyOn(axios, 'get').mockRejectedValue({ name: 'AbortError' });
  const logSpy = jest.spyOn(console, 'error');

  const mockCallback = jest.fn((res) => res);

  const { result, unmount } = renderHook(() =>
    useAxiosRequest('GET', url, null, null, mockCallback)
  );

  act(() => result.current[2]());

  await waitFor(() => {
    expect(result.current[1]).toBe(true);
    expect(mockCallback).toBeCalledTimes(0);
    expect(logSpy).toBeCalledWith(
      'Fetch request was aborted by user action or timeout error'
    );
  });
});
