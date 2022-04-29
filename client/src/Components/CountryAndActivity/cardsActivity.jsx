import React from "react";
import './countryAndActivity.css'
import CardActivity from "./cardActivity";
import {useSelector} from "react-redux";

export default function CardsActivity () {

const detailActivities = useSelector(state => state.countDetail)
   
return (
        <div >
            {detailActivities.activities? detailActivities.activities.length? detailActivities.activities.map (ac =>(
                <div key= {ac.id}>
                  <CardActivity name={ac.name} difficulty={ac.difficulty} duration={ac.duration} season={ac.season} />
              </div>

            ) ) :<div>
                   <h1>No se encontraron actividades, ¿deseas crear una?</h1>
                </div> : null
            }                                    
        </div>
    )
}