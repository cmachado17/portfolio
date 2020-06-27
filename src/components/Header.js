import React from "react";
import Particles from "react-particles-js";
import FotoPersonal from "./styles/img/foto.jpg";
import Image from "react-bootstrap/Image";

const Header = () => {
  return (
    <div id="home">
      <div className="contenedor-imagen">
        <Image src={FotoPersonal} roundedCircle className="foto-personal" />
        <div className="text-center text-typing m-auto text-white">
          <p className="h3">Cristian Machado</p>
          <p className="h4">Desarrollador web</p>
        </div>
        {/* <h3 className="text-typing"></h3>
        <h4 className="text-typing2"></h4> */}
      </div>
      <Particles
        params={{
          "particles": {
            "number": {
              "value": 70,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#1af5a7"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 4
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 134.26573426573427,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 120,
              "color": "#1af5a7",
              "opacity": 0.17,
              "width": 2
            },
            "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        }}
      />
    </div>
  );
};

export default Header;
