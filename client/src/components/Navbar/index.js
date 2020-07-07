// import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  Container,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from "reactstrap";
import "./style.css";

const NavbarMain = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <NavbarBrand>
          <a href="/">
            <img src="./images/logo.PNG" className="logo" />
          </a>
        </NavbarBrand>
        <Nav pills className="justify-content-end">
        <NavItem>
            <NavLink href="#">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Register</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Login</NavLink>
          </NavItem>
          <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret>
              Courses
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>HTML5</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>CSS3</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>JavaScript</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarMain;
