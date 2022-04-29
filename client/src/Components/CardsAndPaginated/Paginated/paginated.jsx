import React from "react";
import '../Cards/cardsAndPaginated.css';

export default function Paginated ({cardsPorPag, estadoCountry, paginado, pagActual}) {
    const numeroDePag =[];
    // if (pagActual !== 1) {
    //     for(let i = 1; i<= estadoCountry/10; i++){
    //         numeroDePag.push(i)
    //     }  
    // }else {
        for (let i = 1; i <= Math.ceil(estadoCountry/cardsPorPag); i++) {
            numeroDePag.push(i);
        }      
    // }
    
    return (
        <div>
           <nav>
              <ul className="paginado" >
                 {numeroDePag && numeroDePag.map (number => (
                    <li className="nums" key = {number}>
                       <button className={number === pagActual?"active" :"stnums"}  onClick={()=> paginado(number)}>{number}</button>
                    </li>
                 ))}
              </ul>
           </nav>
            
        </div>
    )
}