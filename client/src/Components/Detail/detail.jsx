import React from "react";
import './detail.css';
import BarraRutas from "../NavBar/Barra/barra";
import BodyDetail from "../CountryAndActivity/countryAndActivity";

export default function DetailCountry () {
    return (
        <div>
           <BarraRutas/>
           <BodyDetail/>
        </div>
    );
}