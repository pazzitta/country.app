import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Card from "./card";
import Paginated from "../Paginated/paginated";
import './cardsAndPaginated.css';
 //todas las acciones y funciones de estados correspondientes
import {getAllCountry} from '../../../Redux/actions'; //despues ver si necesito las activities... 

//FALTA EL LINK AL DETALLE

export default function CardsAndPag () {

const estadoGlobalCountry = useSelector (state => state.countries)
const dispatch = useDispatch ();

useEffect (()=> {
    dispatch(getAllCountry())
})

    return (
        <div>
        {estadoGlobalCountry.map (info => {
            return (
                <Card name={info.name} id={info.id} region={info.region} flags={info.flags}/> 
            )})
        }

        </div>
    );
}