import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {Link} from "react-router-dom";
import Card from "./card";
import Paginated from '../Paginated/paginated';
import './cardsAndPaginated.css';
 //todas las acciones y funciones de estados correspondientes
import {getAllCountry} from '../../../Redux/actions'; //despues ver si necesito las activities... 
import { detailVacio } from "../../../Redux/actions";

// EN EL DETALLE APARECE LA CARD PERO SOLO CON LOS MENSAJES...
//HACE EL PAGINADO PARO NO APARECEN LOS NUMEROS

export default function CardsAndPag () {

const estadoGlobalCountry = useSelector (state => state.countries)
const dispatch = useDispatch ();

//paginado
const [pagActual, setPagActual] = useState(1)
const [cardsPorPag, setCardPorPag] = useState(9)
const indiceDeCardsFinal = pagActual * cardsPorPag
const indiceDeCardsPrinc = indiceDeCardsFinal - cardsPorPag
const tarjetasAct = estadoGlobalCountry.slice( indiceDeCardsPrinc,indiceDeCardsFinal)

const paginado = (numeroDePag) => {
    setPagActual(numeroDePag)
}
useEffect(() => {
    if(pagActual!==1){
        setCardPorPag(10)
    }
    else if(pagActual===1){
        setCardPorPag(9)
    }
    
}, [pagActual,cardsPorPag])

useEffect (()=> {
    dispatch(getAllCountry())
    dispatch(detailVacio())
}, [dispatch])

    return (
        <div>
        <div className="ordenCards">
        {tarjetasAct.map (info => {
            return (
                <div key={info.id}>
                   <Link to= {'/detail/' + info.id} className= "sinlineaCountCards" >
                       <Card name={info.name} id={info.id} region={info.region} flags={info.flags}/> 
                   </Link>                    
                </div>
            )})
        }        
        </div>    
        <Paginated cardsPorPag={cardsPorPag}  estadoGlobalCountry= {estadoGlobalCountry.length} paginado = {paginado}/>
       </div>
    );
}