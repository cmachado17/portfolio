import React, { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
//Fotos de proyectos
import reactAdvisor from "./styles/img/reactadvisor.png";
import tgifPage from "./styles/img/tgif-page.png";
import NYSLPage from "./styles/img/NYSL-Page.png";
import anotadorLlamadas from "./styles/img/anotador-llamadas.png";
import gastoSemanal from "./styles/img/gasto-semanal.png";
//Logos tecnologias
import htmlLogo from './styles/img/html-5.png';
import cssLogo from './styles/img/css.png';
import javascriptLogo from './styles/img/javascript.png';
import mysqlLogo from './styles/img/mysql.png';
import nodejsLogo from './styles/img/nodejs.png';
import reactLogo from './styles/img/react.png';

const Carrusel = () => {
  return (
    <Fragment>
      <div className="mt-3 pb-1 text-center bg-dark text-white encabezado" id="proyectos">
        <h2>Proyectos</h2>
      </div>
      <Carousel className="container mt-3 carousel">
        <Carousel.Item>
          <Image rounded
            className="d-block w-100 altura-carousel"
            src={reactAdvisor}
            alt="React-Advisor"
          />
          <div>
            <Row className="my-3 text-center">
              <Col sm={12} md={5}>
                <h3>React-Advisor</h3>
              </Col>
              <Col sm={12} md={7}>
                <div className="d-flex w-100 justify-content-center">
                  <img src={reactLogo} alt="react" className="img-tecnologia"/>
                  <img src={nodejsLogo} alt="nodejs" className="img-tecnologia"/>
                  <img src={mysqlLogo} alt="mysql" className="img-tecnologia"/>
                  <img src={cssLogo} alt="css" className="img-tecnologia"/>
                </div>
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
            <Row className="my-3 text-center">
              <Col sm={12} md={5}>
                <h3>Gasto Semanal</h3>
              </Col>
              <Col sm={12} md={7}>
              <div className="d-flex w-100 justify-content-center">
                  <img src={reactLogo} alt="react" className="img-tecnologia"/>
                  <img src={cssLogo} alt="css" className="img-tecnologia"/>
                </div>
              </Col>
            </Row>

            <p>
              Este es un proyecto que saque de un curso de la plataforma Udemy que me encuentro realizando sobre React Hooks, Redux y el stack MERN. En el mismo se ingresa un monto inicial de dinero, luego se van ingresando los gastos con una descripción y el programa calcula cual es el balance de tu presupuesto inicial, te va mostrando el historico de gastos ingresados y te advierte con colores según el porcentaje de presupuesto restante.
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
            <Row className="my-3 text-center">
              <Col sm={12} md={5}>
                <h3>Anotador Llamadas</h3>
              </Col>
              <Col sm={12} md={7}>
              <div className="d-flex w-100 justify-content-center">
                  <img src={reactLogo} alt="react" className="img-tecnologia"/>
                  <img src={javascriptLogo} alt="javascript" className="img-tecnologia"/>
                  <img src={cssLogo} alt="css" className="img-tecnologia"/>
                </div>
              </Col>
            </Row>

            <p>
            Es un registro de llamadas en el cual cuenta con una validación de que todos los campos del formulario son requeridos. Además de mostrarnos todos los registros que vamos ingresando, se pueden borrar. También usa LocalStorage para mantener lo ingresado.
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
            <Row className="my-3 text-center">
              <Col sm={12} md={5}>
                <h3>NYSL Page</h3>
              </Col>
              <Col sm={12} md={7}>
              <div className="d-flex w-100 justify-content-center">
                  <img src={htmlLogo} alt="html" className="img-tecnologia"/>
                  <img src={cssLogo} alt="css" className="img-tecnologia"/>
                  <img src={javascriptLogo} alt="javascript" className="img-tecnologia"/>
                </div>
              </Col>
            </Row>

            <p>
              Página institucional sobre una liga de futbol soccer. Es un proyecto que realice para el Bootcamp de desarrollo web. Esta hecho con HTML, CSS, JavaScript y jQuery, alojado en Firebase. Responsive. Además cuenta con un registro en el cual se podran visualizar y acceder a realizar comentarios sobre la liga.
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
            <Row className="my-3 text-center">
              <Col sm={12} md={5}>
                <h3>TGIF government page</h3>
              </Col>
              <Col sm={12} md={7}>
              <div className="d-flex w-100 justify-content-center">
                  <img src={htmlLogo} alt="html" className="img-tecnologia"/>
                  <img src={cssLogo} alt="css" className="img-tecnologia"/>
                  <img src={javascriptLogo} alt="javascript" className="img-tecnologia"/>
                </div>
              </Col>
            </Row>

            <p>
         Proyecto realizado para el bootcamp de desarrollo web. Pagina web sobre los congresistas de Estados Unidos, obtenidos a traves de una API, la petición se realiza a traves de Vue.js.
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default Carrusel;
