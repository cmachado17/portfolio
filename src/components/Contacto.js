import React, { Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import pdf from './styles/CvMachadoCristian.pdf';

const Contacto = () => {
  return (
    <Fragment>
      <div className="container" id="contacto">
        <Row className="text-center mt-3 mb-5 text-white">
          <Col xs={12}>
            <h2>Contactame</h2>
            <div className="separador"></div>
          </Col>
        </Row>
      </div>
      <div className="container grey-border py-5 my-5">
        <Row>
          <Col sm={12} md={6}>
            <ul className="text-start text-white lista-contacto">
              <li><i className="fa fa-whatsapp"></i> 1533443419</li>
              <li><i className="fa fa-envelope"></i> machado.cristian1217@gmail.com</li>
              <li><i className="fa fa-linkedin"></i> <a
                  href="https://www.linkedin.com/in/cristianmachado1217/"
                  target="noopener noreferrer"
                >Linkedin</a>
              </li>
              <li><i className="fa fa-github"></i> <a href="https://github.com/cmachado17" target="noopener noreferrer">Github</a>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={6}>
            <a className="btn btn-block btn-green-wather" href={pdf} download="CVMachadoCristian">
              Descarga mi Curriculum
            </a>
            <Button block className="btn-green-wather" href="#" target="noopener noreferrer">
              Escribime por Whatsapp
            </Button>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Contacto;
