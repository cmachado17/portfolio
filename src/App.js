import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BarraNavegacion from "./components/BarraNavegacion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carrusel from "./components/Carrusel";

function App() {
  return (
    <div className="App">
      <Row>
        <Col md={3}>
          <BarraNavegacion />
        </Col>
        <Col md={9}>
          <Carrusel />
        </Col>
      </Row>
    </div>
  );
}

export default App;
