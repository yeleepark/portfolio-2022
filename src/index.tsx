import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import GlobalStyle from './style/globalStyle';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);
