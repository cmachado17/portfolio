import React, { Fragment } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Proyecto from "./Proyecto";

//Fotos de proyectos
import reactAdvisor from "./styles/img/reactadvisor.png";
import tgifPage from "./styles/img/tgif-page.png";
import NYSLPage from "./styles/img/NYSL-Page.png";
import anotadorLlamadas from "./styles/img/anotador-llamadas.png";
import gastoSemanal from "./styles/img/gasto-semanal.png";
//Logos tecnologias
import htmlLogo from "./styles/img/html-5.png";
import cssLogo from "./styles/img/css.png";
import javascriptLogo from "./styles/img/javascript.png";
import mysqlLogo from "./styles/img/mysql.png";
import nodejsLogo from "./styles/img/nodejs.png";
import reactLogo from "./styles/img/react.png";

const MultiCarousel = () => {
  const proyectos = [
    {
      imagen: reactAdvisor,
      nombre: "React Advisor",
      tecnologias: [reactLogo, nodejsLogo, mysqlLogo, javascriptLogo, cssLogo],
      descripcion:
        "React-Advisor es el proyecto final que entregue en el curso de Desarrollo de aplicaciones en React Js en Comunidad IT. Esta pensandocomo una red social en la que se pueden registrar y hacer reseñas sobre lugares de comida, bares, heladerias, etc. Ademas cuenta con un apartado de administracion en el que se pueden moderar/borrar los comentarios, dar de alta o de baja a nuevos lugares, eliminar usuarios y una casilla de contacto.",
      repo: "https://github.com/cmachado17/react_Advisor",
      demo: "",
    },
    {
      imagen: gastoSemanal,
      nombre: "Gasto Semanal",
      tecnologias: [reactLogo, cssLogo],
      descripcion:
        "  Este es un proyecto que saque de un curso de la plataforma Udemy que me encuentro realizando sobre React Hooks, Redux y el stack MERN. En el mismo se ingresa un monto inicial de dinero, luego se van ingresando los gastos con una descripción y el programa calcula cual es el balance de tu presupuesto inicial, te va mostrando el historico de gastos ingresados y te advierte con colores según el porcentaje de presupuesto restante.",
      repo: "https://github.com/cmachado17/gasto-semanal",
      demo: "https://zen-booth-ba2fa6.netlify.app/",
    },
    {
      imagen: anotadorLlamadas,
      nombre: "Anotador de llamadas",
      tecnologias: [reactLogo, cssLogo, javascriptLogo],
      descripcion:
        "Es un registro de llamadas en el cual cuenta con una validación de que todos los campos del formulario son requeridos. Además de mostrarnos todos los registros que vamos ingresando, se pueden borrar. También usa LocalStorage para mantener lo ingresado.",
      repo: "https://github.com/cmachado17/anotador_llamadas",
      demo: "https://ecstatic-darwin-1d809a.netlify.app/",
    },
    {
      imagen: NYSLPage,
      nombre: "NYSL Page",
      tecnologias: [javascriptLogo, cssLogo, htmlLogo],
      descripcion:
        "Página institucional sobre una liga de futbol soccer. Es un proyecto que realice para el Bootcamp de desarrollo web. Esta hecho con HTML, CSS, JavaScript y jQuery, alojado en Firebase. Responsive. Además cuenta con un registro en el cual se podran visualizar y acceder a realizar comentarios sobre la liga.",
      repo: "https://github.com/cmachado17/NYSL-page-SPA",
      demo: "https://website-a19fb.web.app/",
    },
    {
      imagen: tgifPage,
      nombre: "TGIF Government",
      tecnologias: [javascriptLogo, cssLogo, htmlLogo],
      descripcion:
        " Proyecto realizado para el bootcamp de desarrollo web. Pagina web sobre los congresistas de Estados Unidos, obtenidos a traves de una API, la petición se realiza a traves de Vue.js.",
      repo: "https://github.com/cmachado17/TGIF-Government-live-data",
      demo: "https://cmachado17.github.io/TGIF-Government-live-data/",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Fragment>
      <div id="proyectos"
        className="my-5 pb-1 text-center bg-dark text-white encabezado"
      >
        <h2>Proyectos</h2>
      </div>
      <Carousel responsive={responsive}>
        {proyectos.map((proyecto) => (
          <Proyecto proyecto={proyecto} key={proyecto.nombre} />
        ))}
      </Carousel>
    </Fragment>
  );
};

export default MultiCarousel;
