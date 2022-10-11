import React from 'react';
import { render } from '@testing-library/react';

import CreateReactPortal from '../create-portal';

const renderPortal = () => {
  const utils = render(
    <div>
      ParentMock
      <CreateReactPortal wrapperId="portal-element">
        <div>PortalMock</div>
      </CreateReactPortal>
    </div>
  );
  return { ...utils };
};

it('should create react portal', () => {
  const { getByText } = renderPortal();
  expect(getByText(/ParentMock/i)).toBeTruthy();
  expect(getByText(/PortalMock/i)).toBeTruthy();
});
