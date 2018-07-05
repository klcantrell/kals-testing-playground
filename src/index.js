import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import buttonApp from './buttonAppReducer';
import App from './components/App';
import { Provider } from 'react-redux';

const store = createStore(buttonApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);