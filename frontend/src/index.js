import React from "react";
import ReactDOM from "react-dom";

import "./style.scss";
import { App } from "./App";
import { HerokuState } from "./context/HerokuState";

ReactDOM.render(
  <HerokuState>
    <App />
  </HerokuState>,
  document.getElementById("root")
);
