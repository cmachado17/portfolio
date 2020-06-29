import React, { Fragment, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ModalCertificado from "./ModalCertificado";

//certificados
import Comit from './styles/img/CertificadoComit.jpg';
import Mindhub from './styles/img/CertificadoMindhub.png';
import ModalMindhub from "./ModalMindhub";

const Educacion = () => {
  const [abrirModal, setAbrirModal] = useState(false);

  const handleAbrirModal = (e) => {
    setAbrirModal(true);
  };

  const handleCerrarModal = (e) => {
    setAbrirModal(false);
  };

  const [abrirModalMindhub, setAbrirModalMindhub] = useState(false);

  const handleAbrirModalMindhub = (e) => {
    setAbrirModalMindhub(true);
  };

  const handleCerrarModalMindhub = (e) => {
    setAbrirModalMindhub(false);
  };

  return (
    <Fragment>
      <div
        className="container my-5"
        id="educacion"
      >
        <Row className="text-center mt-3 mb-5 text-white">
          <Col xs={12}>
            <h2>Educación</h2>
            <div className="separador"></div>
          </Col>
        </Row>
      </div>
      <div className="container text-center text-white grey-border pt-5">
        <h3>Educación académica</h3>
        <div className="separador"></div>
        <Row className="my-5">
          <Col sm={12} md={6} >
            <h4>Técnico en programación informática</h4>
            <p>Universidad Nacional de San Martín</p>
            <p>2019 - 2022</p>
          </Col>
          <Col sm={12} md={6}>
            <h4>Bachiller Técnico en bienes y servicios</h4>
            <p>E.E.T. Nº 2 "Alemania"</p>
            <p>2007 - 2012</p>
          </Col>
        </Row>
        <h3>Educación complementaria</h3>
        <div className="separador"></div>
        <Row className="my-5">

          <Col sm={12} md={6}  className="my-3">
            <h4>Desarrollo de aplicaciones en React</h4>
            <p>Comunidad IT</p>
            <p>2020 - 2020</p>
            <Button className="btn-green-wather" onClick={handleAbrirModal}>
              Ver certificado
            </Button>
          </Col>
          <Col sm={12} md={6} className="my-3">
            <h4>Desarrollo web full stack</h4>
            <p>Mindhub</p>
            <p>2019 - 2019</p>
            <Button className="btn-green-wather" onClick={handleAbrirModalMindhub}>Ver certificado</Button>
          </Col>
        </Row>
        <h3>Otros conocimientos</h3>
        <div className="separador"></div>
        <Row className="my-5">

          <Col sm={12} md={6}  className="my-3">
            <h4>Inglés</h4>
          <ul>
            <li>Lectura: Avanzado</li>
            <li>Oral: Intermedio</li>
            <li>Compresión: Intermedio</li>
          </ul>
         
          </Col>
          <Col sm={12} md={6} className="my-3">
            <h4>Conocimientos de PC</h4>
            <ul>
            <li>Armado y reparación</li>
            <li>Paquete Office</li>
          </ul>
          </Col>
        </Row>
      </div>
      <ModalCertificado
        show={abrirModal}
        handleCerrarModal={handleCerrarModal}
        titulo="Desarrollo de aplicaciones en React"
        certificado={Comit}
      />
           <ModalMindhub
        show={abrirModalMindhub}
        handleCerrarModal={handleCerrarModalMindhub}
        titulo="Desarrollo web full stack"
        certificado={Mindhub}
      />


    </Fragment>
  );
};

export default Educacion;
