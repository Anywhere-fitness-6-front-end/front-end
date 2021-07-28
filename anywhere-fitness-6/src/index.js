import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider, useSelector } from "react-redux";
import logger from "redux-logger";
import reducer from "./redux/reducers";
import App from "./App";
// import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

const store = createStore(reducer);

console.log(reducer)
ReactDOM.render(
    <Provider store={store}>
      {/* // <App /> */}
      <h1> Hello </h1>
     </Provider>,
  document.getElementById("root")
);