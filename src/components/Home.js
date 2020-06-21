import React, { Fragment } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

const Home = () => {
  return (
    <Fragment>
      <div className="mt-3 pb-1 text-center bg-dark text-white encabezado">
        <h2>Hola mundo!</h2>
      </div>
      <div className="container">
        <Jumbotron className="my-3">
          <p>
            Bienvenidos a mi portfolio. Este es un proyecto que tenia hace rato
            en mente en el cual busco mostrar y contar lo que vengo haciendo
            ultimamente.
          </p>
          <p>
            Mi objetivo actualmente es encontrar mi primera oportunidad laboral
            en el area de IT, en la que me vengo especializando hace ya unos
            meses a traves de la facultad y de manera autodidacta. Después de
            pasar por varias carreras a lo largo de los ultimos años, encontre
            en la programación lo que queria hacer todos los dias.
          </p>
          <p>
            Los invito a conocer un poco sobre mi y los proyectos que fui
            armando a modo de practica.
          </p>
        </Jumbotron>
      </div>
    </Fragment>
  );
};

export default Home;
