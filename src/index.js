import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store, persistor } from './state/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

