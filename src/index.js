import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkMode } from "./Toggle";

ReactDOM.render(
  <React.StrictMode>
    <DarkMode>
      <App />
    </DarkMode>
  </React.StrictMode>,
  document.getElementById("root")
);
