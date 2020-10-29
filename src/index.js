import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ListaMensajes from "./ListaMensajes";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ListaMensajes />
  </React.StrictMode>,
  rootElement
);
