import React, { Fragment } from "react";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from 'react-bootstrap/Nav';

const SobreMi = () => {
  return (
    <Fragment>
      <div className="container" id="aboutme">
      <Row className="text-center mt-3 mb-5 text-white">
          <Col xs={12}>
          <h2>Sobre Mi</h2>
          <div className="separador"></div>
          </Col>
         
        </Row>
      </div>
      <div className="container grey-border p-5">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3} md={6} >
              <Nav variant="pills" className="flex-column text-center">
                <Nav.Item>
                  <Nav.Link eventKey="first" className="btn-green-wather cualidades" >Profesional</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" className="btn-green-wather cualidades" >Social</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" className="btn-green-wather cualidades" >Personal</Nav.Link>
                </Nav.Item>
                
              </Nav>
            </Col>
            <Col sm={9} md={6} className="mt-4">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                <ul>
                  <li>Proactivo</li>
                  <li>Responsable</li>
                  <li>Capacidad de adaptación</li>
                  <li>Detallista</li>
                </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <ul>
                  <li>Empatico</li>
                  <li>Trabajo en equipo</li>
                  <li>Escucha atenta</li>
                  <li>Respetuoso</li>
                </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <ul>
                  <li>Gamer</li>
                  <li>Amante de la música</li>
                  <li>Curioso</li>
                  
                </ul>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </Fragment>
  );
};

export default SobreMi;
