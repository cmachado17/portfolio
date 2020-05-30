import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BarraNavegacion from "./components/BarraNavegacion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <Row>
        <Col sm={3}>
          <BarraNavegacion />
        </Col>
        <Col sm={9}>
          2
        </Col>
      </Row>
    </div>
  );
}

export default App;
