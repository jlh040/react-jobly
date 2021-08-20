import React, { useState } from 'react';
import { BrowserRouter, NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="NavBar">
      <Navbar color="light" expand="md">
        <NavbarBrand color="primary">
          <NavLink tag={RRNavLink} exact to="/">Jobly</NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} exact to="/companies">Companies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} exact to="/jobs">Jobs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} exact to="/profile">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} exact to="/signup">Sign Up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} exact to="/login">Login</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;