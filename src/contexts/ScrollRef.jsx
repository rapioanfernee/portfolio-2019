import React, { Component } from "react";

export const ScrollRefContext = React.createContext();

export default class ScrollRefProvider extends Component {
  state = {
    ref: []
  };

  setScroll = refName => {
    this.state.ref
      .find(singleRef => singleRef.name === refName)
      .ref.current.scrollIntoView({ behavior: "smooth" });
  };
  setRef = refObject => {
    this.setState(prevState => ({ ref: [...prevState.ref, refObject] }));
  };
  render() {
    return (
      <ScrollRefContext.Provider
        value={{ setScroll: this.setScroll, setRef: this.setRef }}
      >
        {this.props.children}
      </ScrollRefContext.Provider>
    );
  }
}
