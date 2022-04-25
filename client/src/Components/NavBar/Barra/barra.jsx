import React from "react";
import {Link} from "react-router-dom"
import './barra.css'

export default function BarraRutas () {
    return (
    <div className="boxAppventura">
    <nav className="sinlink">
       <Link to='/home' id="click" className="sinLinea">
          <div className="nameAppventura">Appventura</div>
       </Link>             
    </nav>
    </div>
    );
}