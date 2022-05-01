import React from "react";
import App from "./App";
import {hydrate, render} from "react-dom";
import "./styles/index.css";
import "./styles/fonts.css";
import "react-lazy-load-image-component/src/effects/blur.css";

const root = document.getElementById("root");

if (root.hasChildNodes()) {
  hydrate(<App/>, root);
} else {
  render(<App/>, root);
}
