import React from "react";
import {NavLink} from "react-router-dom";
import './landing.css';
import Videofondo from '../../video/prueba3.mp4'


export default function LandingPage () {
  return ( 
    <div className="cajadivLP">
      <video className="videoLanding"  autoPlay ="autoplay" loop muted>
         <source  src={Videofondo} type= "video/mp4" />
      </video>
          <NavLink className="landingCoun"  to= '/home' id='click'> 
             <button className="botonHomeLP"></button>
          </NavLink>
    </div>
  );
}