import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carrusel from "./components/Carrusel";
import BarraNavegacion from "./components/BarraNavegacion";
import Header from "./components/Header";
import Home from "./components/Home";
import SobreMi from "./components/SobreMi";
import Experiencia from "./components/Experiencia";
import Educacion from './components/Educacion';

function App() {
  return (
    <Fragment>
      <BarraNavegacion />
      <Header />
      <Home />
      <Carrusel/>
      <Educacion />
      <Experiencia />
      <SobreMi />
      
    </Fragment>
  );
}

export default App;
