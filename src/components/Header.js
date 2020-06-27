import React from "react";
import Particles from "react-particles-js";
import FotoPersonal from "./styles/img/foto.jpg";
import Image from "react-bootstrap/Image";

const Header = () => {
  return (
    <div id="home">
      <div className="contenedor-imagen">
        <Image src={FotoPersonal} roundedCircle className="foto-personal" />
        <div className="text-center text-typing m-auto">
          <p className="h3">Cristian Machado</p>
          <p className="h4">Desarrollador web</p>
        </div>
        {/* <h3 className="text-typing"></h3>
        <h4 className="text-typing2"></h4> */}
      </div>
      <Particles
        params={{
          particles: {
            number: {
              value: 43,
              density: {
                enable: true,
                value_area: 868.0624057955,
              },
            },
            color: {
              value: "#070707",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 500,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#000000",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 5,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};

export default Header;
