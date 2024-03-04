// Production issue: mess priority classes between imported styles (e.g import './index.css') and stylex
// Development environment works properly
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
