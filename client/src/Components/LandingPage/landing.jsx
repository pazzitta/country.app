import React from "react";
import {Link} from "react-router-dom";
import './landing.css';

//tengo que cambiar la imagen que tienen un error de ortografía

export default function LandingPage () {
  return ( 
    <div className="landingCoun">
        <Link to= '/home' id='click'>
        <button className="botonHomeLP"></button>
        </Link>
    </div>
  );
}