import React from "react";
import "./Sidebar.scss";

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
    collapsed: false
  };

  navToggle = () => {
    this.setState(prevState => ({
      ...prevState,
      collapsed: !prevState.collapsed
    }));
  };

  render() {
    return this.state.collapsed ? (
      <Navbar className="sidebar sidebar-small flex-column justify-content-center">
        <NavbarToggler className="collapsed" onClick={this.navToggle}>
          <img src="/Collapse.png"></img>
        </NavbarToggler>
        <Collapse isOpen={true} navbar>
          <Nav className="align-items-left justify-content-center" navbar>
            <NavItem className=" pb-4">
              <NavLink className="brand">AR</NavLink>
              <small>Dev</small>
            </NavItem>
            <NavItem className="pr-2 pt-4">
              <NavLink className="small">Proj...</NavLink>
            </NavItem>
            <NavItem className="pr-2">
              <NavLink className="small">Expe...</NavLink>
            </NavItem>
            <NavItem className="pr-2">
              <NavLink className="small">Skills</NavLink>
            </NavItem>
            <NavItem className="pr-2 pb-5">
              <NavLink className="small">Back...</NavLink>
            </NavItem>
            <NavItem>
              <div style={{ flexDirection: "column" }}>
                <a style={{ paddingBottom: "8px" }} href="#">
                  <img src="/fb 2.png" alt="fb"></img>
                </a>
                <a style={{ paddingBottom: "8px" }} href="#">
                  <img src="/gh 2.png" alt="fb"></img>
                </a>
                <a style={{ paddingBottom: "8px" }} href="#">
                  <img src="/linkedin 2.png" alt="fb"></img>
                </a>
              </div>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    ) : (
      <Navbar className="sidebar flex-column justify-content-center">
        <NavbarToggler onClick={this.navToggle}>
          <img src="/Collapse.png"></img>
        </NavbarToggler>
        <Collapse isOpen={true} navbar>
          <Nav className="align-items-left justify-content-center" navbar>
            <NavItem className=" pb-4">
              <NavLink className="brand">Anfernee Rapio</NavLink>
              <small>Front-End Developer</small>
            </NavItem>
            <NavItem className=" pl-5 pt-4">
              <NavLink>Projects</NavLink>
            </NavItem>
            <NavItem className="pl-5">
              <NavLink>Experience</NavLink>
            </NavItem>
            <NavItem className="pl-5">
              <NavLink>Skills</NavLink>
            </NavItem>
            <NavItem className="pl-5 pb-5">
              <NavLink>Background</NavLink>
            </NavItem>
            <NavItem>
              <div>
                <a href="#">
                  <img src="/fb 2.png" alt="fb"></img>
                </a>
                <a href="#">
                  <img src="/gh 2.png" alt="fb"></img>
                </a>
                <a href="#">
                  <img src="/linkedin 2.png" alt="fb"></img>
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
