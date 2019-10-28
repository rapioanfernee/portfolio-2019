import React from "react";

import "./Menu.scss";

import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarToggler,
  Collapse
} from "reactstrap";

const Menu = () => {
  return (
    <Nav className="d-lg-none menu" vertical>
      <NavItem>
        <NavLink href="#">
          <div>
            <span>Anfernee Rapio</span>
            <small>Front-End Developer</small>
          </div>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Projects</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Experience</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Skills</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Background</NavLink>
      </NavItem>
    </Nav>
  );
};

export default Menu;
