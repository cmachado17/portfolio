import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Proyecto = ({ proyecto }) => {
  return (
    <Card className="altura-cards">
      <Card.Header>
        <Card.Img src={proyecto.imagen} />
      </Card.Header>
      <Card.Body>
        <Card.Title>{proyecto.nombre}</Card.Title>
        <Card.Title>Nombre del proyecto</Card.Title>
        <Card.Text>{proyecto.descripcion}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-center">
          <Row>
            <Col xs={6}>
              <Button>Demo</Button>
            </Col>
            <Col xs={6}>
              <Button>Github</Button>
            </Col>
          </Row>

        </Card.Footer>
    </Card>
  );
};

export default Proyecto;
