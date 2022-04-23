import React from "react";
import './searchbar.css';
import {useDispatch} from 'react-redux';
import { useState } from "react";
//acá hay que importar la acción de búsqueda
import {searchByName} from '../../../Redux/actions'

export default function SearchBar () {
const dispatch = useDispatch();
const [name, setName] = useState ('');

function handleChange (e) {
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
        <div className="posicion">
           <input value={name} className="searchName" placeholder="Buscar por nombre" onChange={handleChange} />
           <button type='submit' className="botonAvion" onClick={handleSummit} ></button> 
        </div>
       
    </div>
    );
}