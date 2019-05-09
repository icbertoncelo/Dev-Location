import React from "react";
import { Provider } from "react-redux";
import "./config/ReactotronConfig";

import Routes from "./routes";
import store from "./store";

import "./styles.css";

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
