import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "./styles/img/aventuras.png";

const BarraNavegacion = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img src={logo} className="logo" />
        <Navbar.Text>Cristian Machado</Navbar.Text>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav variant="dark" className="text-center">
          <Nav.Link href="#">SOBRE MI</Nav.Link>
          <Nav.Link href="#">PROYECTOS</Nav.Link>
          <Nav.Link href="#">EXPERIENCIA</Nav.Link>
          <Nav.Link href="#">EDUCACIÓN</Nav.Link>
          <Nav.Link href="#">CONTACTAME</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BarraNavegacion;
