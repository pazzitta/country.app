import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import Card from "./card";
import Paginated from '../Paginated/paginated';
import './cardsAndPaginated.css';
import {getAllCountry} from '../../../Redux/actions'; 


export default function CardsAndPag () {

const estadoCountry = useSelector (state => state.countries)
const dispatch = useDispatch ();

const [pagActual, setPagActual] = useState(1)
const [cardsPorPag, setCardPorPag] = useState(10)
const indiceDeCardsFinal = pagActual * cardsPorPag
const indiceDeCardsPrinc = indiceDeCardsFinal - cardsPorPag
const tarjetasAct = estadoCountry.slice( indiceDeCardsPrinc,indiceDeCardsFinal)


const paginado = (numeroDePag) => {
     setPagActual(numeroDePag)
}

// useEffect(() => {
//     if(pagActual!==1){
//         setCardPorPag(10)
//     }
//     else if(pagActual===1){
//         setCardPorPag(9)
// }
    
// }, [pagActual,cardsPorPag])



useEffect (()=> {
    dispatch(getAllCountry())
}, [dispatch])


useEffect (()=> {
    paginado (1)
},[estadoCountry])

    return (
        <div>
           
           <div className="ordenCards">
              {tarjetasAct?.map (info => {
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
              <Paginated cardsPorPag={cardsPorPag}  estadoCountry= {estadoCountry.length} paginado = {paginado} />
           </div>    
       
       </div>
    );
}