import React from "react";
import './countryAndActivity.css';
import CardsActivity from "./cardsActivity";

import {getAllDetail, getActivities} from '../../Redux/actions'

//aca se asocia todo el detalle completo ---conutries y activities (tengo que ver como uno la ruta de datalles y saco las card de casa actividad)

export default function BodyDetail () {
    return (
        <div>
            <div className="cajaCardsActDet">
               <div className="nameActiDet">ACTIVIDADES TURÍSTICAS</div>
               <CardsActivity/>
            </div>

            <div className="cajaCountriesDet">
               
               <div className="boxPasaporteDetail">

                  <div>Nombre country</div>
                  
                  <div className="boxImagenDet">
                     <div>Imagen(flasg)</div>
                     <div>ID3</div>
                  </div>
               
                  <div className="boxInfoCountDet">

                    <div>
                        <div>Continenete:</div>
                        <div>Nombre contienente</div>
                     </div>

                     <div>
                        <div>Subregión:</div>
                        <div>Nombre subregión</div>
                     </div>

                     <div>
                        <div>Capital:</div>
                        <div>Nombre capital</div>
                     </div>

                     <div>
                        <div>Población:</div>
                        <div>Cant de población</div>
                     </div>

                     <div>
                        <div>Área:</div>
                        <div>área en m2</div>
                     </div>
               
                  </div>
               
               </div>
            
            </div>
            
            
            <button className="botonHomeDet"></button>
        </div>
    )
}