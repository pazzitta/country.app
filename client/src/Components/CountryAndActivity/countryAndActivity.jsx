import React from "react";
import './countryAndActivity.css';
import CardsActivity from "./cardsActivity";
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import {getAllDetail, getActivities} from '../../Redux/actions'

//aca se asocia todo el detalle completo ---conutries y activities (tengo que ver como uno la ruta de datalles y saco las card de casa actividad)
//OJO, SI NO TENGO ACTIVIDADES CREADAS EN EL DETALLE NO ME DEJA TRAER NADA... HACER EL TERNARIO DE LAS ACTIVIDADES.

export default function BodyDetail () {

const dispatch = useDispatch();
const detailCountry = useSelector (state => state.countDetail)
console.log(detailCountry)

const {id} = useParams();

useEffect (()=>{
    dispatch(getAllDetail(id))
}, [dispatch, id])

    return (
        <div key= {id}>
            <div className="cajaCardsActDet">
               <div className="nameActiDet">ACTIVIDADES TURÍSTICAS</div>
               <CardsActivity/>
            </div>

            <div className="cajaCountriesDet">
               
               <div className="boxPasaporteDetail">
                  <div className="nameCounDet">{detailCountry[0].name} </div>
                  
                  <div className="boxImagenDet">
                     <img className="imagTamDet" src={detailCountry[0].flags} />
                     <div>{detailCountry[0].id} </div>
                  </div>
               
                  <div className="boxInfoCountDet">

                    <div>
                        <div>Continenete:</div>
                        <div>{detailCountry[0].region} </div>
                        <div className="lineaSepDet" ></div>
                     </div>

                     <div>
                        <div>Subregión:</div>
                        <div>{detailCountry[0].subregion} </div>
                        <div className="lineaSepDet" ></div>
                     </div>

                     <div>
                        <div>Capital:</div>
                        <div>{detailCountry[0].capital} </div>
                        <div className="lineaSepDet" ></div>
                     </div>

                     <div>
                        <div>Población:</div>
                        <div>{detailCountry[0].population} </div>
                        <div className="lineaSepDet" ></div>
                     </div>

                     <div>
                        <div>Área:</div>
                        <div>{detailCountry[0].area} Km2</div>
                        <div className="lineaSepDet" ></div>
                     </div>
               
                  </div>
               
               </div> 
            
            </div>
            
            <div>
                <Link to='/home' id='click'>
                   <button className="botonHomeDet"></button>
                </Link>
            </div>
        </div>
    )
}