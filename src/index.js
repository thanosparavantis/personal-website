import React from "react";
import "./index.css";
import App from "./App";
import {createRoot, hydrateRoot} from "react-dom/client";

const root = document.getElementById("root");

if (root.hasChildNodes()) {
  hydrateRoot(root, <App/>);
} else {
  createRoot(root).render(<App/>);
}
