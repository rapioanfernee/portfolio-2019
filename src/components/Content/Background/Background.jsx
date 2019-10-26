import React, { Component } from "react";
import "./Background.scss";

class Background extends Component {
  render() {
    return (
      <div className="background" ref={this.props.sectionRef}>
        Background
      </div>
    );
  }
}

export default Background;
