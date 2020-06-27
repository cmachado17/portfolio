import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BarraNavegacion from "./components/BarraNavegacion";
import Header from "./components/Header";
import Home from "./components/Home";
import SobreMi from "./components/SobreMi";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";
import MultiCarousel from "./components/MultiCarousel";
import Contacto from "./components/Contacto";

function App() {
  return (
    <Fragment>
      <BarraNavegacion />
      <Header />
      <Home />
      <MultiCarousel />
      <Educacion />
      <Experiencia />
      {/* <SobreMi />  */}
      <Contacto />
    </Fragment>
  );
}

export default App;
