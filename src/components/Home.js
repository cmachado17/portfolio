import React, { Fragment } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

const Home = () => {
  return (
    <Fragment>
      <div className="mt-3 pb-1 text-center bg-dark text-white encabezado">
        <h2>Bienvenidos</h2>
      </div>
      <div className="container">
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p></p>
        </Jumbotron>
      </div>
    </Fragment>
  );
};

export default Home;
