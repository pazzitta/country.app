import React from "react";
import './selects.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//todas las acciónes y los componenetes de estados
import {getActivities, filterByActivity, filterByRegion, orderByNameAZ, orderByNameZA,getAllCountry, 
    orderByPopulationMin, orderByPopulationMax} from '../../Redux/actions'

//FALTA EL SELECT ACTIVITIES Y ARREGLAR LOS OTROS QUE NO ANDAN...
//TAMBIÉN ME GUSTARIA RESETAR LOS ESTADOS (QUE VUELVA A 0 CUANDO UNO EL RESET)
export default function Selects () {

const dispatch = useDispatch();
const allActivities = useSelector (state => state.activities);

const [page, setPage] = useState (1);
const [orden, setOrden] = useState ('');

function handleSortName(e){ 
    if(e.target.value === "Asc"){
    //    e.preventDefault ();
       dispatch(orderByNameAZ(e.target.value));
    //    setPage (1);
    //    setOrden (`Ordenado ${e.target.value}`)
   }else if(e.target.value === "Desc"){
    //    e.preventDefault ();
       dispatch (orderByNameZA(e.target.value));
    //    setPage (1);
    //    setOrden (`Ordenado ${e.target.value}`)
   }else{
       
   }
}

function handleRegion (e) {
    e.preventDefault()
    dispatch (filterByRegion(e.target.value))
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

    function handleClickRes (e) {
        e.preventDefault()
        dispatch(getAllCountry())
    }

    useEffect (() => {
        dispatch(getActivities())
    }, [dispatch])

    return (
    
    <div className="ordenTodos">
        
       <button className="botonReset" onClick={handleClickRes}>Reset</button>

       <select className="selectAct">
           <option>Filtar por actividad</option>
           {allActivities && allActivities.map (a => ( 
              <option key={a.id} value= {a.name}>{a.name}</option> 
           ))}
       </select> 
       
       {/* Ver de cambiar a castellano las opciones  */}
       <select onChange={handleRegion} className="selectCont">
           <option value="AllCont">Filtar por continente</option>
           <option value="Africa">Africa</option>
           <option value="Americas">Americas</option>
           <option value="Asia">Asia</option>
           <option value="Europe">Europe</option>
           <option value="Oceania">Oceania</option>
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