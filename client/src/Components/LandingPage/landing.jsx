import React from "react";
import {Link, NavLink} from "react-router-dom";
import './landing.css';
import Videofondo from '../../video/prueba3.mp4'

//Tengo un tema en el frame final de vide, cuando hace el loop queda feito, después hay algo en el localizador de australia y quizá los aviones tenegan que ser mas grandes.
//SI CUANDO TERMINE TODA LA FUNCIONALIDAD HACER ESTE VIDEO, POR EL MOMENTO QUEDA ASÍ!

export default function LandingPage () {
  return ( 
    <div >
      <video className="videoLanding"  autoPlay ="autoplay" loop muted>
         <source src={Videofondo} type= "video/mp4" />
      </video>
      {/* HAY UN LINK EN EL FONDO DE LA PÁG PROBABLEMENTE SEA ESO LO QUE JODE */}
          <NavLink className="landingCoun"  to= '/home' id='click'> 
             <button className="botonHomeLP"></button>
          </NavLink>
    </div>
  );
}