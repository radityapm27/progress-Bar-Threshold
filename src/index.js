import React from "react";
import ReactDOM from "react-dom";

import ProgressBar from "./ProgressBar";

function App() {
  return (
    <ProgressBar start="0" end="3" height={50} progress={25} threshold="1" />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
