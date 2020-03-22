import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import initStore from "./js/reducers/store";
import App from "./js/components/App";

export const store = initStore();

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById("root")
);