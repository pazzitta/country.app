import React from "react";
import './countryAndActivity.css';
import CardsActivity from "./cardsActivity";

import {getAllDetail, getActivities} from '../../Redux/actions'

//aca se asocia todo el detalle completo ---conutries y activities (tengo que ver como uno la ruta de datalles y saco las card de casa actividad)

export default function BodyDetail () {
    return (
        <div>
            <div className="cajaCardsActDet">
               <div className="nameActiDet">ACTIVIDADES</div>
               <CardsActivity/>
            </div>

            <div className="cajaCountriesDet">
               <div>solo el detalle del país</div> 
            </div>
            
            
            <button className="botonHomeDet"></button>
        </div>
    )
}