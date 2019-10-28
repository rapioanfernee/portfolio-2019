import React from "react";
import { Container } from "reactstrap";

import "./Content.scss";

import Background from "./Background/Background";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.projectsRefDesktop = React.createRef();
    this.projectsRef = React.createRef();
    this.experienceRef = React.createRef();
    this.skillsRef = React.createRef();
    this.backgroundRef = React.createRef();
  }

  componentDidMount() {
    this.props.setRef({ name: "Projects", ref: this.projectsRef });
    this.props.setRef({
      name: "ProjectsDesktop",
      ref: this.projectsRefDesktop
    });
    this.props.setRef({ name: "Experience", ref: this.experienceRef });
    this.props.setRef({ name: "Skills", ref: this.skillsRef });
    this.props.setRef({ name: "Background", ref: this.backgroundRef });
  }

  render() {
    return (
      <div style={{ overflowY: "auto", margin: "0 auto", width: "100%" }}>
        {/* <ScrollRefContext.Consumer>
          {context => <Menu {...context}></Menu>}
        </ScrollRefContext.Consumer> */}
        <Container className="content">
          <Projects
            sectionRef={{
              projectsRefDesktop: this.projectsRefDesktop,
              projectsRef: this.projectsRef
            }}
          ></Projects>
          <Experience sectionRef={this.experienceRef}></Experience>
          <Skills sectionRef={this.skillsRef}></Skills>
          <Background sectionRef={this.backgroundRef}></Background>
        </Container>
      </div>
    );
  }
}

export default Content;
