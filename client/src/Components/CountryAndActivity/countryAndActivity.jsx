import React, { useEffect } from "react";
import './countryAndActivity.css';
import CardsActivity from "./cardsActivity";
import { useDispatch, useSelector} from "react-redux";
import { Link, useParams } from "react-router-dom";
import {getAllDetail, detailVacio} from '../../Redux/actions'


export default function BodyDetail () {

const dispatch = useDispatch();
const detailCountry = useSelector (state => state.countDetail)

const {id} = useParams();

useEffect (()=>{
    dispatch(getAllDetail(id))
}, [dispatch, id])

useEffect (() => {
   return dispatch(detailVacio())
}, [dispatch])

    return (
        <div key= {id} className="todaLaPant">
           
            <div className="cajaCountriesDet">
               <div className="boxPasaporteDetail">
                  
                  <div className="nameCounDet">{detailCountry.name} </div>
                  
                  <div className="boxImagenDet">
                     <img className="imagTamDet" src={detailCountry.flags} alt="banderas" />
                     <div className="idCounDet">{detailCountry.id} </div>
                  </div>
               
                  <div className="boxInfoCountDet">

                    <div>
                        <div className="nameContCounDet">Continente:</div>
                        <div className="contCounDet">{detailCountry.region} </div>
                        <div className="lineaSepDet1" ></div>
                     </div>

                     <div>
                        <div className="nameSRCounDet">Subregión:</div>
                        <div className="sRCounDet">{detailCountry.subregion} </div>
                        <div className="lineaSepDet2" ></div>
                     </div>

                     <div>
                        <div className="nameCapCounDet">Capital:</div>
                        <div className="capCounDet">{detailCountry.capital} </div>
                        <div className="lineaSepDet3" ></div>
                     </div>

                     <div>
                        <div className="namePobCounDet">Población:</div>
                        <div className="pobCounDet">{detailCountry.population} </div>
                        <div className="lineaSepDet4" ></div>
                     </div>

                     <div>
                        <div className="nameAreCounDet">Área:</div>
                        <div className="areCounDet">{detailCountry.area} Km2</div>
                        <div className="lineaSepDet5" ></div>
                     </div>
               
                  </div>
               
               </div> 
            
            </div> 

            <div className="cajaCardsActDet">
               <div className="nameActiDet">ACTIVIDADES TURÍSTICAS</div>
                  <CardsActivity/>
                  <Link  to='/create' id='click'>
                     <button className="newActCreate"></button>
                  </Link>
               </div>
            
            <div className="vistaLink">
                <Link to='/home' id='click'>
                   <button className="botonHomeDet"></button>
                </Link>
            </div>
        </div>
    )
}