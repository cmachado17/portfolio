import React, { Fragment } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () => {
  return (
    <Fragment>
      <div className="container">
        <Row className="text-center mt-3 mb-5 text-white">
          <Col xs={12}>
          <h2>Hola mundo!</h2>
          <div className="separador"></div>
          </Col>
         
        </Row>
        
      </div>
      <div className="container">
        <Jumbotron className="my-5 grey-border">
          <p>
            Bienvenidos a mi portfolio. Este es un proyecto que tenia hace rato
            en mente en el cual busco mostrar y contar lo que vengo haciendo
            ultimamente.
          </p>
          <p>
            Mi objetivo actualmente es encontrar mi primera oportunidad laboral
            en el area de IT, en la que me vengo especializando hace ya unos
            meses a través de la facultad y de manera autodidacta. Después de
            pasar por varias carreras a lo largo de los ultimos años, encontré
            en la programación lo que queria hacer todos los días.
          </p>
          <p>
            Los invito a conocer un poco sobre mi y los proyectos que fui
            armando a modo de práctica.
          </p>
        </Jumbotron>
      </div>
    </Fragment>
  );
};

export default Home;
