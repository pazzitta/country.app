import React from "react";
import './countryAndActivity.css';
import CardsActivity from "./cardsActivity";

//aca se asocia todo el detalle completo ---conutries y activities (tengo que ver como uno la ruta de datalles y saco las card de casa actividad)

export default function BodyDetail () {
    return (
        <div>
            <CardsActivity/>
            <div>solo el detalle del país</div> 
            <button>Rosa de los vientos</button>
        </div>
    )
}