import React from "react";
import './searchbar.css';
//acá hay que importar la acción de búsqueda
import {searchByName, getAllCountry} from '../../../Redux/actions'

export default function SearchBar () {
    return (
    <div>
        <div className="posicion">
           <input className="searchName" placeholder="Buscar por nombre" />
           <button className="botonAvion"></button> 
        </div>
       
    </div>
    );
}