import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import GlobalStyle from './globalStyle';

import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <>
      <GlobalStyle />
      <Routes />
    </>
  </Provider>
);

export default App;
