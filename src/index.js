import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router basename="https://l2fc3s.github.io/react-loftRental-website">
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
