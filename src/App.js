import React from "react";

import "./App.scss";
import Menu from "./components/Menu/Menu";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import ScrollRefProvider, { ScrollRefContext } from "./contexts/ScrollRef";

function App() {
  return (
    <ScrollRefProvider>
      <div className="app">
        <ScrollRefContext.Consumer>
          {context => (
            <>
              <Sidebar {...context}></Sidebar>

              <Content {...context}></Content>
            </>
          )}
        </ScrollRefContext.Consumer>
      </div>
    </ScrollRefProvider>
  );
}

export default App;
