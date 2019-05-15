import './config/ReactotronConfig';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
import GlobalStyle from './globalStyle';

import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <>
      <GlobalStyle />
      <Routes />
      <ToastContainer autoClose={3000} />
    </>
  </Provider>
);

export default App;
