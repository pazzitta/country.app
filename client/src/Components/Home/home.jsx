import React from 'react';
import './home.css'

//componentes 
import BarraRutas from '../NavBar/Barra/barra';
import SearchBar from '../NavBar/SearchBar/searchbar';
import Selects from '../Selects/selects';
import CardsAndPag from '../CardsAndPaginated/Cards/cards';


// ver si nec estilo general

export default function HomePage () {
    return (
    <div>
        <BarraRutas/>
        <SearchBar/>
        <Selects/>
        <CardsAndPag/>
    </div>
    );
}