import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import LifeCycleExamples from "./LifeCycleExamples";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <LifeCycleExamples />
  </React.StrictMode>,
  rootElement
);
