import React from "react";
import './selects.css';

//todas las acciónes y los componenetes de estados
import {getActivities, filterByActivity, filterByRegion, orderByNameAZ, orderByNameZA, 
    orderByPopulationAsc, orderByPopulationDes} from '../../Redux/actions'

// arreglar la posición de los selects, están levemente descentrados
export default function Selects () {
    return (
    
    <div className="ordenTodos">
        
       <button className="botonReset">Reset</button>

       <select className="selectAct">
           <option>Filtar por actividad</option>
       </select> 
       
       {/* Ver de cambiar a castellano las opciones  */}
       <select className="selectCont">
           <option>Filtar por continente</option>
           <option>Africa</option>
           <option>Americas</option>
           <option>Asia</option>
           <option>Europe</option>
           <option>Oceania</option>
       </select>

       <select className="selectAlfab">
          <option>Ordenar alfabéticamente</option>
          <option>A-Z</option>
          <option>Z-A</option>
       </select>

       <select className="selectPobl">
           <option>Ordenar por población</option>
           <option>Min-Max</option>
           <option>Max-Min</option>
       </select>

   

    </div>

    );
}