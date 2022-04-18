/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import globalStyles from './globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
