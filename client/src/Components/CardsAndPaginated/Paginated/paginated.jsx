import React from "react";
import '../Cards/cardsAndPaginated.css';


export default function Paginated ({cardsPorPag, estadoGlobalCountry, paginado}) {
    const numeroDePag =[];
    for (let i = 1; i <= Math.ceil(estadoGlobalCountry/cardsPorPag); i++) {
        numeroDePag.push(i);
    }
    
    return (
        <nav>
        <ul className="paginado" >
            {numeroDePag && numeroDePag.map (number => (
                <li className="nums" key = {number}>
                    <a onClick={()=> paginado(number)}>{number}</a>
                </li>
            ))}
        </ul>
      </nav>
    )
}