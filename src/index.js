import React from "react";
import "./index.css";
import App from "./App";
import {hydrate, render} from "react-dom";

const root = document.getElementById("root");

if (root.hasChildNodes()) {
  hydrate(<App/>, root);
} else {
  render(<App/>, root);
}
