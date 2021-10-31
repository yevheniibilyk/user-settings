import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Navbar.css';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/" className="navbar-container">
        <img
          alt=""
          src="/logo.svg"
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{' '}
        User Settings
      </Navbar.Brand>
    </Navbar>
  )
}

export default NavbarComponent;
