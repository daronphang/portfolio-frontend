import { useEffect, useState } from 'react';
import axios from 'axios';

// Custom hook for handling axios requests for GET/POST/PUT/DELETE
// All fetch requests should be using this hook
// resCallback and errCallback are functions to handle additional logic if required

export default function useAxiosRequest(
  method = 'GET',
  url,
  payload,
  resCallback = () => {},
  errCallback = () => {},
  options
) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [trigger, setTrigger] = useState(0);

  const triggerRequest = () => {
    setTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    if (trigger < 1) return;
    // Used to cancel ongoing fetch requests in the event it is cancelled or component is unmounted
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    // const signal = AbortSignal.timeout(5000);

    const addOptions = {
      signal: controller.signal, // signal
      //   withCredentials: true, // default to true for CSRF validation
    };

    if (!options) {
      options = addOptions;
    } else {
      options = { ...options, ...addOptions };
    }

    const handleAxiosRequest = async () => {
      setIsLoading(true);
      try {
        let res;
        switch (method) {
          case 'GET':
            res = await axios.get(url, options);
            setData(res.data);
            resCallback(res.data);
            setIsLoading(false);
            break;
          case 'POST':
            res = await axios.post(url, payload, options);
            setData(res.data);
            resCallback(res.data);
            setIsLoading(false);
            break;
          default:
            break;
        }
      } catch (error) {
        let msg =
          'An unknown error has occurred while while making the request';

        if (error.name === 'TimeoutError') {
          console.error('Timeout: The request took more than 5 seconds');
          msg = 'Request was aborted due to timeout error';
        } else if (error.name === 'AbortError') {
          // If axios is aborted, do nothing to prevent memory leaks
          // current implementation is an explicit timeout abort
          // unable to tell whether the abort was caused by timeout
          console.error(
            'Fetch request was aborted by user action or timeout error'
          );
          return;
        } else {
          if (error.response) {
            // request was made and server responded with status code > 300
            msg = error.response.data?.message
              ? error.response.data.message
              : msg;
          } else if (error.request) {
            // request was made but no response was received
            msg = error.request;
          } else {
            // unable to trigger request
            msg = error.message;
          }
        }
        errCallback(msg);
        setIsLoading(false);
      } finally {
        clearTimeout(timeoutId);
      }
    };

    // trigger needs to be explicit and not implicit
    handleAxiosRequest();

    // Cleanup function to abort axios request if cancelled/component unmounted
    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [trigger]);

  // if don't want to subscribe to data and errMsg, input an underscore instead
  // i.e. const [_, _, isLoading ...] = useState()

  return [data, isLoading, triggerRequest];
}
