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
          <img src={logo} className="logo" alt="logo" />
          <Navbar.Text className="font-weight-bold text-white">
            Cristian Machado
          </Navbar.Text>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav variant="dark" className="ml-auto text-center barra-navegacion">
          <Link to="/sobremi">SOBRE MI</Link>
          <Link to="/proyectos">PROYECTOS</Link>
          <Link to="/experiencia">EXPERIENCIA</Link>
          <Nav.Link href="#">EDUCACIÓN</Nav.Link>
          <Nav.Link href="#">CONTACTAME</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BarraNavegacion;
