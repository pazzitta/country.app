import React from "react";
import './countryAndActivity.css'



export default function CardActivity ({name, difficulty, duration, season}) {
    return (
        <div className="boxCardDetalle">
            
            <div className="boxnameCardAct">
               <div className="nameCardAct">{name}:</div>
            </div>
            
            <div className="boxDifCardAct">
                <div className="difNaCardAct">Dificultad</div>
                <div className="difCardAct" >{difficulty}</div>
            </div>

            <div className="boxDurCardAct">
                <div className="durNaCardAct">Duración</div>
                <div className="durCardAct">{duration}</div>
            </div>
            
            <div className="boxEstCardAct">
               <div className="estNaCardAct" >Estación</div>
               <div className="estCardAct">{season}</div>
            </div>
        </div>
    )
}