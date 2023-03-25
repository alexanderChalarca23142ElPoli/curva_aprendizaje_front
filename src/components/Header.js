import React from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  /*return (
    <div className="container-fluid">
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "rgb(120, 120, 120)" }}
      >
        <NavLink to="/" className="btn" style={{ color: "white" }}>
          Home
        </NavLink>

        <NavLink to="/add" className="btn" style={{ color: "white" }}>
          Add
        </NavLink>
        <NavLink to="/about" className="btn" style={{ color: "white" }}>
          About
        </NavLink>
      </nav>
    </div>
  );*/
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Prueba</Navbar.Brand>
        <Nav className="me-auto">
        <NavLink to="/" className="btn" style={{ color: "white" }}>
          Home
        </NavLink>
        <NavLink to="/about" className="btn" style={{ color: "white" }}>
          Acerca de
        </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
