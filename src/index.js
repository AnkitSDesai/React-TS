import React from "react";
import { render } from "react-dom";

import "./styles.css";

import { Menu } from "./components";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Menu />
  </div>
);

render(<App />, document.getElementById("root"));
