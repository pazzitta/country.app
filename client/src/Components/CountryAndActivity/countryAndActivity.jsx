import React from "react";
import './countryAndActivity.css';
import CardsActivity from "./cardsActivity";
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import {getAllDetail, getActivities} from '../../Redux/actions'

//aca se asocia todo el detalle completo ---conutries y activities (tengo que ver como uno la ruta de datalles y saco las card de casa actividad)
// hay momentos que se me pira, no machea el id entonces me trae un objeto vacío en el estado...

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

            {detailCountry.length > 0 ?
            <div className="cajaCountriesDet">
               
               <div className="boxPasaporteDetail">
                  <div className="nameCounDet">{detailCountry[0].name? detailCountry[0].name :"No se encontró nombre"} </div>
                  
                  <div className="boxImagenDet">
                     <img className="imagTamDet" src={detailCountry[0].flags? detailCountry[0].flags : "No se encotró imagen"} alt="banderas" />
                     <div className="idCounDet">{detailCountry[0].id ? detailCountry[0].id : "No se encontró id"} </div>
                  </div>
               
                  <div className="boxInfoCountDet">

                    <div>
                        <div className="nameContCounDet">Continente:</div>
                        <div className="contCounDet">{detailCountry[0].region? detailCountry[0].region : "No se encontó región" } </div>
                        <div className="lineaSepDet1" ></div>
                     </div>

                     <div>
                        <div className="nameSRCounDet">Subregión:</div>
                        <div className="sRCounDet">{detailCountry[0].subregion? detailCountry[0].subregion : "No se encontó subregión" } </div>
                        <div className="lineaSepDet2" ></div>
                     </div>

                     <div>
                        <div className="nameCapCounDet">Capital:</div>
                        <div className="capCounDet">{detailCountry[0].capital? detailCountry[0].capital : "No se encontró capital"} </div>
                        <div className="lineaSepDet3" ></div>
                     </div>

                     <div>
                        <div className="namePobCounDet">Población:</div>
                        <div className="pobCounDet">{detailCountry[0].population? detailCountry[0].population : "No se encontró población"} </div>
                        <div className="lineaSepDet4" ></div>
                     </div>

                     <div>
                        <div className="nameAreCounDet">Área:</div>
                        <div className="areCounDet">{detailCountry[0].area? detailCountry[0].area : "No se encontró área"} Km2</div>
                        <div className="lineaSepDet5" ></div>
                     </div>
               
                  </div>
               
               </div> 
            
            </div> : <p>VOLVER, EL DETALLE NO CARGA...</p>
            }

            
            <div>
                <Link to='/home' id='click'>
                   <button className="botonHomeDet"></button>
                </Link>
            </div>
        </div>
    )
}