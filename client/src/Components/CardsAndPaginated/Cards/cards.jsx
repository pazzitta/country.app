import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {Link} from "react-router-dom";
import Card from "./card";
import Paginated from '../Paginated/paginated';
import './cardsAndPaginated.css';
import {getAllCountry} from '../../../Redux/actions'; 
import { detailVacio } from "../../../Redux/actions";


export default function CardsAndPag () {

const estadoGlobalCountry = useSelector (state => state.countries)
const dispatch = useDispatch ();

//paginado
const [pagActual, setPagActual] = useState(1)
const [cardsPorPag, setCardPorPag] = useState(9)
const indiceDeCardsFinal = pagActual * cardsPorPag
// console.log(indiceDeCardsFinal)
const indiceDeCardsPrinc = indiceDeCardsFinal - cardsPorPag
const tarjetasAct = estadoGlobalCountry.slice( indiceDeCardsPrinc,indiceDeCardsFinal)
console.log(tarjetasAct)

const paginado = (numeroDePag) => {
     setPagActual( numeroDePag)
}
// hay un problema, renderiza 1 página menos... y en los filtros también
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
}, [dispatch])

// useEffect (() => {
//     dispatch(detailVacio())
// }, [dispatch])

useEffect (()=> {
    paginado (1)
},[estadoGlobalCountry])

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
        <div>
        <Paginated cardsPorPag={cardsPorPag}  estadoGlobalCountry= {estadoGlobalCountry.length} paginado = {paginado} />
        </div>    
       </div>
    );
}