import React, { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import reactAdvisor from "./styles/img/reactadvisor.png";
import tgifPage from "./styles/img/tgif-page.png";
import NYSLPage from "./styles/img/NYSL-Page.png";
import anotadorLlamadas from "./styles/img/anotador-llamadas.png";
import gastoSemanal from "./styles/img/gasto-semanal.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';

const Carrusel = () => {
  return (
    <Fragment>
      <div className="mt-3 pb-1 text-center bg-dark text-white encabezado">
        <h2>Proyectos</h2>
      </div>
      <Carousel className="container mt-3">
        <Carousel.Item>
          <Image rounded
            className="d-block w-100 altura-carousel"
            src={reactAdvisor}
            alt="React-Advisor"
          />
          <div>
            <Row className="text-center">
              <Col sm={12} md={5}>
                <h3>React-Advisor</h3>
              </Col>
              <Col sm={12} md={7}>
                <p>Barrita de tecnologias usadas</p>
              </Col>
            </Row>

            <p>
              React-Advisor es el proyecto final que entregue en el curso de
              Desarrollo de aplicaciones en React Js en Comunidad IT. Esta
              pensando como una red social en la que se pueden registrar y hacer
              reseñas sobre lugares de comida, bares, heladerias, etc. Ademas
              cuenta con un apartado de administracion en el que se pueden
              moderar/borrar los comentarios, dar de alta o de baja a nuevos
              lugares, eliminar usuarios y una casilla de contacto.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <Image rounded
            className="d-block w-100 altura-carousel"
            src={gastoSemanal}
            alt="Gasto semanal"
          />
          <div>
            <Row className="text-center">
              <Col sm={12} md={5}>
                <h3>Gasto Semanal</h3>
              </Col>
              <Col sm={12} md={7}>
                <p>Barrita de tecnologias usadas</p>
              </Col>
            </Row>

            <p>
              React-Advisor es el proyecto final que entregue en el curso de
              Desarrollo de aplicaciones en React Js en Comunidad IT. Esta
              pensando como una red social en la que se pueden registrar y hacer
              reseñas sobre lugares de comida, bares, heladerias, etc. Ademas
              cuenta con un apartado de administracion en el que se pueden
              moderar/borrar los comentarios, dar de alta o de baja a nuevos
              lugares, eliminar usuarios y una casilla de contacto.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <Image rounded
            className="d-block w-100 altura-carousel"
            src={anotadorLlamadas}
            alt="Anotador Llamadas"
          />
          <div>
            <Row className="text-center">
              <Col sm={12} md={5}>
                <h3>Anotador Llamadas</h3>
              </Col>
              <Col sm={12} md={7}>
                <p>Barrita de tecnologias usadas</p>
              </Col>
            </Row>

            <p>
              React-Advisor es el proyecto final que entregue en el curso de
              Desarrollo de aplicaciones en React Js en Comunidad IT. Esta
              pensando como una red social en la que se pueden registrar y hacer
              reseñas sobre lugares de comida, bares, heladerias, etc. Ademas
              cuenta con un apartado de administracion en el que se pueden
              moderar/borrar los comentarios, dar de alta o de baja a nuevos
              lugares, eliminar usuarios y una casilla de contacto.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <Image rounded
            className="d-block w-100 altura-carousel"
            src={gastoSemanal}
            alt="Gasto semanal"
          />
          <div>
            <Row className="text-center">
              <Col sm={12} md={5}>
                <h3>Gasto Semanal</h3>
              </Col>
              <Col sm={12} md={7}>
                <p>Barrita de tecnologias usadas</p>
              </Col>
            </Row>

            <p>
              React-Advisor es el proyecto final que entregue en el curso de
              Desarrollo de aplicaciones en React Js en Comunidad IT. Esta
              pensando como una red social en la que se pueden registrar y hacer
              reseñas sobre lugares de comida, bares, heladerias, etc. Ademas
              cuenta con un apartado de administracion en el que se pueden
              moderar/borrar los comentarios, dar de alta o de baja a nuevos
              lugares, eliminar usuarios y una casilla de contacto.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <Image rounded
            className="d-block w-100 altura-carousel"
            src={NYSLPage}
            alt="NYSL Page"
          />
          <div>
            <Row className="text-center">
              <Col sm={12} md={5}>
                <h3>NYSL Page</h3>
              </Col>
              <Col sm={12} md={7}>
                <p>Barrita de tecnologias usadas</p>
              </Col>
            </Row>

            <p>
              React-Advisor es el proyecto final que entregue en el curso de
              Desarrollo de aplicaciones en React Js en Comunidad IT. Esta
              pensando como una red social en la que se pueden registrar y hacer
              reseñas sobre lugares de comida, bares, heladerias, etc. Ademas
              cuenta con un apartado de administracion en el que se pueden
              moderar/borrar los comentarios, dar de alta o de baja a nuevos
              lugares, eliminar usuarios y una casilla de contacto.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <Image rounded
            className="d-block w-100 altura-carousel"
            src={tgifPage}
            alt="TGIF government"
          />
          <div>
            <Row className="text-center">
              <Col sm={12} md={5}>
                <h3>TGIF government page</h3>
              </Col>
              <Col sm={12} md={7}>
                <p>Barrita de tecnologias usadas</p>
              </Col>
            </Row>

            <p>
              React-Advisor es el proyecto final que entregue en el curso de
              Desarrollo de aplicaciones en React Js en Comunidad IT. Esta
              pensando como una red social en la que se pueden registrar y hacer
              reseñas sobre lugares de comida, bares, heladerias, etc. Ademas
              cuenta con un apartado de administracion en el que se pueden
              moderar/borrar los comentarios, dar de alta o de baja a nuevos
              lugares, eliminar usuarios y una casilla de contacto.
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default Carrusel;
