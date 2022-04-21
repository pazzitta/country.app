import React, { useEffect } from "react";
import './countryAndActivity.css'
import CardActivity from "./cardActivity";
import {getActivities, getAllDetail} from '../../Redux/actions'
import { useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";

//importar todas las acciones y funciones de estado que necesito... para traer la info y el detalle de las actividaes

export default function CardsActivity (props) {

const detailActivities = useSelector(state => state.countDetail)
console.log(detailActivities)    
const dispatch = useDispatch();
const {id} = useParams();

useEffect (()=> {
    dispatch(getAllDetail(id))
}, [dispatch, id])
   
return (
        <div >
            {detailActivities[0].activities? detailActivities[0].activities.length? detailActivities[0].activities.map (ac =>(
                <div key= {ac.id}>
                  <CardActivity name={ac.name} difficulty={ac.difficulty} duration={ac.duration} season={ac.season} />
              </div>

            ) ) : 
            <div>
            <h1>No se encuentran actividades, ¿deseas crear una?</h1>
            </div> : null
            }
           
               
                  
        </div>
    )
}