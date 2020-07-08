import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// main app
import App from "./containers/App";
import "./styles/app.scss";
import configureStore from "./store/ConfigureStore";
import "./containers/saga.js";
import CollegeHome from "./pages/collegeHome";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
    <CollegeHome />
  </Provider>,
  document.getElementById("root")
);
