import React from 'react';
import BarraRutas from '../NavBar/Barra/barra';
import SearchBar from '../NavBar/SearchBar/searchbar';
import Selects from '../Selects/selects';
import CardsAndPag from '../CardsAndPaginated/Cards/cards';

export default function HomePage () {
    return (
    <div>
        <Selects/>
        <BarraRutas/>
        <SearchBar/>
        <CardsAndPag/>
    </div>
    );
}