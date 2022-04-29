import React from "react";
import './cardsAndPaginated.css'



export default function Card ({name, flags, region, id}) {
    
    return (
    
      <div>
         <div className="boxCardCoun">
            
            <div className="nameCoun">{name}</div>

            <div className="idCoun">{id}</div>

            <div className="regionCoun" >{region}</div>
      
            <img className="tamFlagsCoun" src={flags} alt = "char-img"/>
               
         </div>

      </div>
  );
}