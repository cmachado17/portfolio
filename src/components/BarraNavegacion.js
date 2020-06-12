import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "./styles/img/aventuras.png";
import { Link } from "react-router-dom";

const BarraNavegacion = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="sticky-top">
      <Link to="/">
        <Navbar.Brand>
          <img src={logo} className="logo" />
          <Navbar.Text className="font-weight-bold text-white">Cristian Machado</Navbar.Text>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav variant="dark" className="text-center barra-navegacion">
          <Nav.Link href="#">SOBRE MI</Nav.Link>
          <Nav.Link>
            <Link to="/proyectos">PROYECTOS</Link>
          </Nav.Link>
          <Nav.Link href="#">EXPERIENCIA</Nav.Link>
          <Nav.Link href="#">EDUCACIÓN</Nav.Link>
          <Nav.Link href="#">CONTACTAME</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BarraNavegacion;
