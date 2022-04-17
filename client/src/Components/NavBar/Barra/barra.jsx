import React from "react";
import {Link} from "react-router-dom"
import './barra.css'

//HAY UN TEMA QUE EL LINK ESTÁ EN TODA LA BARRA Y YO SOLO LO QUERO EN EL NOMBRE! VER COMO SOLUCIONAR!
export default function BarraRutas () {
    return (
    <div >
    <nav className="boxAppventura" >
       <Link to='/home' id="click" className="sinLinea">
          <div className="nameAppventura">Appventura</div>
       </Link>             
    </nav>
    </div>
    );
}