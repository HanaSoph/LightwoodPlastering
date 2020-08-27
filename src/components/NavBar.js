import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import logo from "../assets/Plastering_LogoBLUE.png";

function NavBar() {
  return (
    <Navbar className="nav-color nav-height shadow" variant="dark">
      <img src={logo} alt="Lightwood Plastering logo" height="90px" className="pl-sm-3 pl-md-5"/>
      <Nav className="ml-auto" align="right" >
        <Nav.Link href="#Home">Home</Nav.Link>
        <Nav.Link href="#services">Services</Nav.Link>
        <Nav.Link href="#contact" className="pr-sm-3 pr-md-5">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;