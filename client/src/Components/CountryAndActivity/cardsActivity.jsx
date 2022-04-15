import React from "react";
import './countryAndActivity.css'
import CardActivity from "./cardActivity";
import {getActivities} from '../../Redux/actions'

//importar todas las acciones y funciones de estado que necesito... para traer la info y el detalle de las actividaes

export default function CardsActivity () {
    return (
        <div>
            <CardActivity/>
        </div>
    )
}