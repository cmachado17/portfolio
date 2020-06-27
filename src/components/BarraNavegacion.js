import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "./styles/img/aventuras.png";
import Headroom from 'react-headroom'
import { Link } from "react-scroll";

const BarraNavegacion = () => {
  return (
    <Headroom style={{
      WebkitTransition: 'all .5s ease-in-out',
      MozTransition: 'all .5s ease-in-out',
      OTransition: 'all .5s ease-in-out',
      transition: 'all .5s ease-in-out',
    }}>
    <Navbar expand="lg" className="navbar sticky-top">
      <Link to="home" smooth={true} duration={1000}>
        <Navbar.Brand>
          <img src={logo} className="logo" alt="logo" />

          <Navbar.Text className="font-weight-bold text-white">
            Cristian Machado
          </Navbar.Text>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto text-center nav-links">
          <Link to="proyectos" smooth={true} duration={1000} offset={100}>
            PROYECTOS
          </Link>
          <Link to="educacion" smooth={true} duration={1000}>
            EDUCACIÓN
          </Link>
          <Link to="experiencia" smooth={true} duration={1000}>
            EXPERIENCIA
          </Link>
          <Link to="aboutme" smooth={true} duration={1000}>
            SOBRE MI
          </Link>
          <Link to="contactme" smooth={true} duration={1000}>
            CONTACTAME
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Headroom>
  );
};

export default BarraNavegacion;
