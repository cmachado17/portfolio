import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import shortid from 'shortid';

const Proyecto = ({ proyecto }) => {
  return (
    <Card className="altura-cards mx-1 grey-border">
      <Card.Header>
        <Card.Img src={proyecto.imagen} />
      </Card.Header>
      <Card.Body>
        <Card.Title>{proyecto.nombre}</Card.Title>
        <Card.Title>
        
              {proyecto.tecnologias.map(tecnologia =>(
                <img src={tecnologia} alt="html" className="img-tecnologia" key={shortid.generate()}/>
              ))}
       
        </Card.Title>
        <Card.Text>{proyecto.descripcion}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-center">
        <Row>
          <Col xs={6}>
            <a className="btn btn-green-wather" href={proyecto.repo} target="noopener noreferrer">Github</a>
          </Col>
          <Col xs={6}>
              {proyecto.demo.length>1 ?  <a className="btn btn-green-wather" href={proyecto.demo} target="noopener noreferrer">Demo</a>: null}
           
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default Proyecto;
