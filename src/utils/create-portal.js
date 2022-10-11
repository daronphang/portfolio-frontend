import { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

const createWrapper = (wrapperId) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

export default function CreateReactPortal({ wrapperId, children }) {
  const [wrapperElement, setWrapperElement] = useState(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      element = createWrapper(wrapperId);
      systemCreated = true;
    }
    setWrapperElement(element);

    // prevent body from scrolling when modal is opened
    document.body.style.overflow = 'hidden';
    // const rootElement = document.getElementById('root');
    // rootElement.style.overflow = 'hidden';

    // cleanup to remove div from DOM during unmount
    return () => {
      // remove appended div from body
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
      // rootElement.style.overflow = 'unset';
      document.body.style.overflow = 'unset';
    };
  }, [wrapperId]);

  // function expects container to be available in the DOM already
  // at start of first render, there is no div element attached
  if (wrapperElement === null) return null;

  return createPortal(children, document.getElementById(wrapperId));
}
