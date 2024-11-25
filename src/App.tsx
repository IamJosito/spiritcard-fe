import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { env } from "process";

const foo = env.REACT_APP_URL;

function App() {
  return <div className="App">{foo}</div>;
}

export default App;
