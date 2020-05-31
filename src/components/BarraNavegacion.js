import React from "react";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";


const BarraNavegacion = () => {

  return (
      <>
    <Nav className="bg-success flex-column altura-nav">
      <div className="my-5 p-2 text-center">
        <Image
          src="https://img.freepik.com/foto-gratis/pensativo-cliente-pensando-oferta-especial_74855-3588.jpg?size=626&ext=jpg"
          rounded
          className="img-fluid"
        />
      </div>
        <Col className="float-to-top text-center">
          <p className="h3">Cristian Machado</p>
        </Col>
        <Col className="float-to-bottom text-center">
          <Nav.Link>SOBRE MI</Nav.Link>
          <Nav.Link>PROYECTOS</Nav.Link>
          <Nav.Link>EDUCACION</Nav.Link>
          <Nav.Link>EXPERIENCIA LABORAL</Nav.Link>
          <Nav.Link>CONTACTO</Nav.Link>
        </Col>
    
    </Nav>
    </>
  );
};

export default BarraNavegacion;
