import React from "react";
import './searchbar.css';
import {useDispatch} from 'react-redux';
import { useState } from "react";
//acá hay que importar la acción de búsqueda
import {searchByName} from '../../../Redux/actions'

export default function SearchBar () {
const dispatch = useDispatch();
const [name, setName] = useState ('');


function handleSearcName (e) {
    e.preventDefault()
    setName (e.target.value)
}


function handleSummit (e) {
    e.preventDefault()
    dispatch(searchByName(name))
    setName('')
}
    
    return (
    <div>
        <form onSubmit={handleSummit} className="posicion">
           <input value={name} autoComplete= 'off' className="searchName" placeholder="Buscar por nombre" onChange={handleSearcName} />
           <button type='submit' className="botonAvion"  ></button> 
        </form>
       
    </div>
    );
}