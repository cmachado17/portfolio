import React from "react";
import Carousel from "react-bootstrap/Carousel";
import reactAdvisor from "./styles/img/reactadvisor.png";

const Carrusel = () => {
  return (
    <Carousel className="container">
      <Carousel.Item>
        <img
          className="d-block w-100 altura-carousel"
          src={reactAdvisor}
          alt="First slide"
        />
        <div>
          <div className="text-center">
            <h3>React-Advisor</h3>
            <p>Barrita de tecnologias usadas</p>
          </div>

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
  );
};

export default Carrusel;
