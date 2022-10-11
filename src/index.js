import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import { SnackbarProvider } from 'notistack';
import styled from 'styled-components';

import { standardStyles } from './utils/styles';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

const StyledSnackbarProvider = styled(SnackbarProvider)``;

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <StyledSnackbarProvider
        maxSnack={1}
        sx={{
          '& .SnackbarContent-root': {
            fontSize: standardStyles.fontSizeVerySmall,
          },
        }}
        dense
      >
        <App />
      </StyledSnackbarProvider>
    </BrowserRouter>
  </Provider>
  // <React.StrictMode>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
