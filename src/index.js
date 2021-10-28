// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

// Instruments
import { store } from './init/store';

// Pages
import App from './App';

render(
  <BrowserRouter>
    <Provider store = { store }>
        <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
