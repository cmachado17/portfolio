import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carrusel from "./components/Carrusel";
import BarraNavegacion from "./components/BarraNavegacion";
import Header from "./components/Header";
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <BarraNavegacion />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/proyectos">
          <Carrusel />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
