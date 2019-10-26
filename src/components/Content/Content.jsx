import React from "react";
import { Container } from "reactstrap";

import "./Content.scss";

import Background from "./Background/Background";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

class Content extends React.Component {
  render() {
    return (
      <div style={{ overflowY: "auto", margin: "0 auto", width: "100%" }}>
        <Container className="content">
          <Projects></Projects>
          <Experience></Experience>
          <Skills></Skills>
          <Background></Background>
        </Container>
      </div>
    );
  }
}

export default Content;
