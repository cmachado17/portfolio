import React, { Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cadete from "./styles/img/presupuesto.png";
import Representante from "./styles/img/agente-de-centro-de-llamadas.png";
import Entrenador from "./styles/img/comida-rapida.png";
import Crew from "./styles/img/mcdonalds.png";


const Experiencia = () => {

  return (
    <Fragment>

      <div className="mt-3 pb-1 text-center bg-dark text-white encabezado" id="experiencia">
        <h2>Experiencia</h2>
      </div>
      <div className="container">
        <Row className="mt-5 mb-3">
          <Col md={12} lg={6} className="flip-card mb-3">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h4>Cadete Administrativo</h4>
                <img src={Cadete} alt="Avatar" className="img-fluid" />
              </div>
              <div className="flip-card-back">
                <h4>Consultora Rago & Asociados</h4>
                <p>2014 - Actualmente</p>
                <ul>
                  <li>Presentacion de documentos</li>
                  <li>Elaboracion de presentaciones</li>
                  <li>Retiro de pagos</li>
                  <li>Control de legajos</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={12} lg={6} className="flip-card mb-3">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h4>Representante de atención al cliente</h4>
                <img src={Representante} alt="Avatar" className="img-fluid" />
              </div>
              <div className="flip-card-back">
                <h4>Comdata S.A.</h4>
                <p>2014 - 2014</p>
                <ul>
                  <li>Presentacion de documentos</li>
                  <li>Elaboracion de presentaciones</li>
                  <li>Retiro de pagos</li>
                  <li>Control de legajos</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mb-5 mt-3">
          <Col md={12} lg={6} className="flip-card mb-3">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h4>Entrenador</h4>
                <img src={Entrenador} alt="Avatar" className="img-fluid" />
              </div>
              <div className="flip-card-back">
                <h4>Mostaza y pan S.A.</h4>
                <p>2013 - 2014</p>
                <ul>
                  <li>Presentacion de documentos</li>
                  <li>Elaboracion de presentaciones</li>
                  <li>Retiro de pagos</li>
                  <li>Control de legajos</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={12} lg={6} className="flip-card mb-3">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h4>Crew</h4>
               
                <img src={Crew} alt="Avatar" className="img-fluid" />
              </div>
              <div className="flip-card-back">
                <h4>Arcos Dorados S.A.</h4>
                <p>2012 - 2012</p>
                <ul>
                  <li>Presentacion de documentos</li>
                  <li>Elaboracion de presentaciones</li>
                  <li>Retiro de pagos</li>
                  <li>Control de legajos</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>

    </Fragment>
  );
};

export default Experiencia;
