import React, { useState }  from "react";
import './searchbar.css';
import {useDispatch} from 'react-redux';
import {searchByName} from '../../../Redux/actions'

export default function SearchBar () {
const dispatch = useDispatch();
const [name, setName] = useState ('');


function handleSearchName (e) {
    e.preventDefault()
    setName (e.target.value)
}


function handleSubmit (e) {
    e.preventDefault()
    dispatch(searchByName(name))
    setName('')
}
    
    return (
    <div>
        <form onSubmit={handleSubmit} className="posicion">
           <input value={name} type='text' autoComplete= 'off' className="searchName" placeholder="Buscar por nombre" onChange={handleSearchName} />
           <button type='submit' className="botonAvion"  ></button> 
        </form>
       
    </div>
    );
}