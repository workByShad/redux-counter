import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import allReducers from './reducers/allReducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
