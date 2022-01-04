import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./assets/fonts/style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, Router, Routes } from "react-router-dom";
import ForCast from "./forcast";
import Hourly from "./hourly";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/forcast" element={<ForCast />} />
      <Route path="/hourly" element={<Hourly />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
reportWebVitals();
