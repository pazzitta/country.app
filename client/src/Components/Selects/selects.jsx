import React from "react";
import './selects.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//todas las acciónes y los componenetes de estados
import {getActivities, filterByActivity, filterByRegion, orderByNameAZ, orderByNameZA, 
    orderByPopulationMin, orderByPopulationMax} from '../../Redux/actions'

// arreglar la posición de los selects, están levemente descentrados
export default function Selects () {

const dispatch = useDispatch();

const [page, setPage] = useState (1);
const [orden, setOrden] = useState ('');

function handleSortPopulation(e){
    if(e.target.value === "Min"){
        e.preventDefault ();
        dispatch (orderByPopulationMin(e.target.value));
        setPage (1);
        setOrden (`Ordenado ${e.target.value}`)
    }else if(e.target.value === "Max"){
        e.preventDefault ();
        dispatch (orderByPopulationMax(e.target.value));
        setPage (1);
        setOrden (`Ordenado ${e.target.value}`)
    }else{
           
     }
    }
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

       <select onChange={(e)=>handleSortPopulation(e)} className="selectPobl">
           <option value="AllP">Ordenar por población</option>
           <option value="Min" >Min-Max</option>
           <option value="Max" >Max-Min</option>
       </select>

   

    </div>

    );
}