import React from "react";
import {Link} from "react-router-dom";
import './landing.css';
import Videofondo from '../../video/prueba3.mp4'

//Tengo un tema en el frame final de vide, cuando hace el loop queda feito, después hay algo en el localizador de australia y quizá los aviones tenegan que ser mas grandes.
//SI CUANDO TERMINE TODA LA FUNCIONALIDAD HACER ESTE VIDEO, POR EL MOMENTO QUEDA ASÍ!

export default function LandingPage () {
  return ( 
    <div >
      <video className="videoLanding"  autoPlay ="autoplay" loop muted>
         <source src={Videofondo} type= "video/mp4" />
         {/* <source src={Videofondo2} type = "video/ogv"/> */}
      </video>
        <Link to= '/home' id='click'>
        <button className="botonHomeLP"></button>
        </Link>
    </div>
  );
}