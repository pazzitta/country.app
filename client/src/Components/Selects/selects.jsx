import React from "react";
import './selects.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//todas las acciónes y los componenetes de estados
import {getActivities, filterByActivity, filterByRegion, orderByNameAZ, orderByNameZA,getAllCountry, 
    orderByPopulationMin, orderByPopulationMax} from '../../Redux/actions'

// arreglar la posición de los selects, están levemente descentrados
export default function Selects () {

const dispatch = useDispatch();
const allActivities = useSelector (state => state.activities);

const [page, setPage] = useState (1);
const [orden, setOrden] = useState ('');

function handleSortName(e){ 
    if(e.target.value === "Asc"){
       e.preventDefault ();
       dispatch (orderByNameAZ(e.target.value));
       setPage (1);
       setOrden (`Ordenado ${e.target.value}`)
   }else if(e.target.value === "Desc"){
       e.preventDefault ();
       dispatch (orderByNameZA(e.target.value));
       setPage (1);
       setOrden (`Ordenado ${e.target.value}`)
   }else{
       
   }
}

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

    useEffect (() => {
        dispatch(getActivities())
    }, [dispatch])

    return (
    
    <div className="ordenTodos">
        
       <button className="botonReset">Reset</button>

       <select className="selectAct">
           <option>Filtar por actividad</option>
           {allActivities && allActivities.map (a => ( 
              <option key={a.id} value= {a.name}>{a.name}</option> 
           ))}
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

       <select onChange={handleSortName} className="selectAlfab">
          <option key="AllN" value="AllN">Ordenar alfabéticamente</option>
          <option key="Asc" value="Asc">A-Z</option>
          <option key= "Desc" value="Desc">Z-A</option>
       </select>

       <select onChange={(e)=>handleSortPopulation(e)} className="selectPobl">
           <option value="AllP">Ordenar por población</option>
           <option value="Min" >Min-Max</option>
           <option value="Max" >Max-Min</option>
       </select>

   

    </div>

    );
}