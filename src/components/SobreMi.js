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
      <div className="container">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                asdasd1
                </Tab.Pane>
                <Tab.Pane eventKey="second">
              asdasda4
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
