import React from "react";
import './detail.css';
import BarraRutas from "../NavBar/Barra/barra";
import BodyDetail from "../CountryAndActivity/countryAndActivity";

//el tamaño de la pantalla es mayor a lo que necesito! 
export default function DetailCountry () {
    return (
        <div>
        
           <div className="barraEnDetail">
              <BarraRutas/>
           </div> 
           
           <div className="boxBodyDet" >
              <BodyDetail/>
           </div>
        </div>
    );
}