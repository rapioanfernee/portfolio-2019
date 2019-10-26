import React from "react";

import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <Content></Content>
    </div>
  );
}

export default App;
