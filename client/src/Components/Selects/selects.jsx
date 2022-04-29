import React from "react";
import './selects.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
//todas las acciónes y los componenetes de estados
import {getActivities, filterByActivity, filterByRegion,getAllCountry, 
     orderByName, orderByPopulation } from '../../Redux/actions'


export default function Selects () {

const dispatch = useDispatch();
const allActivities = useSelector (state => state.activities);


function handleSortName (e) {
    e.preventDefault()
    dispatch (orderByName(e.target.value))
}


function handleRegion (e) {
    e.preventDefault()
    dispatch (filterByRegion(e.target.value))
}

function handleFilActivities (e) {
    e.preventDefault()
    dispatch(filterByActivity(e.target.value) )
}


function handleSortPopulation (e) {
    e.preventDefault()
    dispatch(orderByPopulation (e.target.value))
}

function handleClickRes (e) {
    e.preventDefault()
    dispatch(getAllCountry()) 
    // window.location.reload()  
}

useEffect (() => {
    dispatch(getActivities())
}, [dispatch])

    return (
    
    <div className="ordenTodos">
        
       <button className="botonReset" onClick={handleClickRes}>Reset</button>

       <select onChange={handleFilActivities} className="selectAct">
           <option key="None" value="None">Filtar por actividad</option>
           {allActivities && allActivities.map (a => ( 
              <option key={a.id} value= {a.name}>{a.name}</option> 
           ))}
       </select> 
       
       <select onChange={handleRegion} className="selectCont">
           <option key="AllCont" value="AllCont">Filtar por continente</option>
           <option key="Africa" value="Africa">Africa</option>
           <option key="Americas" value="Americas">Americas</option>
           <option key= "Asia" value="Asia">Asia</option>
           <option key="Europe" value="Europe">Europe</option>
           <option key= "Oceania" value="Oceania">Oceania</option>
       </select>

       <select  onChange={handleSortName}  className="selectAlfab">
          <option key="AllN" value="AllN">Ordenar alfabéticamente</option>
          <option key="Asc" value="Asc">A-Z</option>
          <option key= "Desc" value="Desc">Z-A</option>
       </select>

       <select  onChange={(e)=>handleSortPopulation(e)} className="selectPobl">
           <option key="AllP" value="AllP">Ordenar por población</option>
           <option key="Min" value="Min" >Min-Max</option>
           <option key="Max" value="Max" >Max-Min</option>
       </select>

   

    </div>

    );
}