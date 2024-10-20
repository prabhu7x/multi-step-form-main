import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./build/store";
import { Provider } from "react-redux";
import App from "./build/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);
