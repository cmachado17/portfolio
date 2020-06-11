import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carrusel from "./components/Carrusel";
import BarraNavegacion from "./components/BarraNavegacion";
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <BarraNavegacion />
      <Header />
      <Carrusel />
    </div>
  );
}

export default App;
