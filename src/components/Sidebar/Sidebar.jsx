import React from "react";
import "./Sidebar.scss";
import "../../index.scss";

import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Collapse
} from "reactstrap";

class Sidebar extends React.Component {
  state = {
    collapsed: true
  };

  navToggle = () => {
    this.setState(prevState => ({
      ...prevState,
      collapsed: !prevState.collapsed
    }));
  };

  scrollInto = refName => {
    this.props.setScroll(refName);
  };

  render() {
    return this.state.collapsed ? (
      <Navbar className="d-flex sidebar sidebar-small flex-column justify-content-center">
        <NavbarToggler className="collapsed" onClick={this.navToggle}>
          {/* <img src="/Collapse.png" alt="menu"></img> */}
        </NavbarToggler>
        <Collapse isOpen={true} navbar>
          <Nav className="align-items-left justify-content-center" navbar>
            <NavItem
              onClick={() => this.scrollInto("Projects")}
              className="pr-2"
            >
              <NavLink style={{ cursor: "pointer" }} className="brand">
                AR
              </NavLink>
              <small>Dev</small>
            </NavItem>
            <NavItem
              onClick={() => this.scrollInto("Projects")}
              className="pr-2"
            >
              <NavLink style={{ cursor: "pointer" }} className="small">
                Projects
              </NavLink>
            </NavItem>
            <NavItem
              onClick={() => this.scrollInto("Experience")}
              className="pr-2"
            >
              <NavLink style={{ cursor: "pointer" }} className="small">
                Experience
              </NavLink>
            </NavItem>
            <NavItem onClick={() => this.scrollInto("Skills")} className="pr-2">
              <NavLink style={{ cursor: "pointer" }} className="small">
                Skills
              </NavLink>
            </NavItem>
            <NavItem
              onClick={() => this.scrollInto("Background")}
              className="pr-2 pb-2"
            >
              <NavLink style={{ cursor: "pointer" }} className="small">
                Background
              </NavLink>
            </NavItem>
            <NavItem>
              <div style={{ flexDirection: "column" }}>
                <a
                  style={{ paddingBottom: "8px" }}
                  href="https://www.facebook.com/rapioanfernee"
                >
                  <img src="/portfolio/fb-2.png" alt="fb"></img>
                </a>
                <a
                  style={{ paddingBottom: "8px" }}
                  href="https://github.com/anferneerapio"
                >
                  <img src="/portfolio/gh-2.png" alt="fb"></img>
                </a>
                <a
                  style={{ paddingBottom: "8px" }}
                  href="https://www.linkedin.com/in/anfernee-rapio-673843136/"
                >
                  <img src="/portfolio/linkedin-2.png" alt="fb"></img>
                </a>
              </div>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    ) : (
      <Navbar className="d-flex sidebar flex-column justify-content-center">
        <NavbarToggler onClick={this.navToggle}>
          {/* <img src="/Collapse.png" alt="menu"></img> */}
        </NavbarToggler>
        <Collapse isOpen={true} navbar>
          <Nav className="align-items-left justify-content-center" navbar>
            <NavItem
              onClick={() => this.scrollInto("Projects")}
              className="pr-2"
            >
              <NavLink style={{ cursor: "pointer" }} className="brand">
                Anfernee Rapio
              </NavLink>
              <small>Front-End Developer</small>
            </NavItem>
            <NavItem
              onClick={() => this.scrollInto("Projects")}
              className="pl-4 pr-2"
            >
              <NavLink style={{ cursor: "pointer" }}>Projects</NavLink>
            </NavItem>
            <NavItem
              onClick={() => this.scrollInto("Experience")}
              className="pl-4 pr-2"
            >
              <NavLink style={{ cursor: "pointer" }}>Experience</NavLink>
            </NavItem>
            <NavItem
              onClick={() => this.scrollInto("Skills")}
              className="pl-4 pr-2"
            >
              <NavLink style={{ cursor: "pointer" }}>Skills</NavLink>
            </NavItem>
            <NavItem
              onClick={() => this.scrollInto("Background")}
              className="pl-4 pr-2"
            >
              <NavLink style={{ cursor: "pointer" }}>Background</NavLink>
            </NavItem>
            <NavItem>
              <div>
                <a href="https://www.facebook.com/rapioanfernee">
                  <img src="/portfolio/fb-2.png" alt="fb"></img>
                </a>
                <a href="https://github.com/anferneerapio">
                  <img src="/portfolio/gh-2.png" alt="fb"></img>
                </a>
                <a href="https://www.linkedin.com/in/anfernee-rapio-673843136/">
                  <img src="/portfolio/linkedin-2.png" alt="fb"></img>
                </a>
              </div>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Sidebar;
