import axios from 'axios';
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
export const FILTER_BY_ACTIVITY = 'FILTER_BY_ACTIVITY';
export const FILTER_BY_REGION = 'FILTER_BY_REGION ';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION';
export const GET_ALL_DETAIL = 'GET_ALL_DETAIL';
export const GET_ACTITIVIIES = 'GET_ACTITIVIIES'; 
export const POST_ACTIVITY = 'POST_ACTIVITY';
export const DETAIL_VACIO ='DETAIL_VACIO' 

const RUTA_GET_ACTIVITIES = 'http://localhost:3001/activities/get'
const RUTA_GET_COUNTRY = 'http://localhost:3001/countries/get'
const RUTA_POST_ACTIVITY = 'http://localhost:3001/activities/create'
const RUTA_ORDER_BY_NAME = 'http://localhost:3001/orden/name'
const RUTA_ORDER_BY_POPULATION = 'http://localhost:3001/orden/population'


export const getAllCountry = () => async dispatch => {
    return await fetch(RUTA_GET_COUNTRY)
       .then(respose => respose.json())
       .then (json => dispatch ({type:GET_ALL_COUNTRIES, payload: json}))
       .catch(e=> console.log(e))       
}

export const getActivities = () => async dispatch => {
    return await fetch(RUTA_GET_ACTIVITIES)
    .then(respose => respose.json())
    .then (json => dispatch ({type: GET_ACTITIVIIES, payload: json}))
    .catch(e=> console.log(e)) 
}

export const searchByName = (payload) => async dispatch => {
    return await fetch( `${RUTA_GET_COUNTRY}/?name=${payload}`)
    .then(respose => respose.json())
    .then(json => dispatch({type: SEARCH_BY_NAME, payload: json}))
    .catch(() => alert (`No se encontró ${payload}, intentelo nuevamente`) )
}

export const orderByName = (orden) => async dispatch => {
    return await fetch(`${RUTA_ORDER_BY_NAME}/?orden=${orden}`)
    .then(respose => respose.json())
    .then (json => dispatch ({type: ORDER_BY_NAME, payload: json}))
    .catch(e=> console.log(e)) 
}

export const orderByPopulation = (orden) => async dispatch => {
    return await fetch(`${RUTA_ORDER_BY_POPULATION}/?orden=${orden}`)
    .then(respose => respose.json())
    .then (json => dispatch ({type: ORDER_BY_POPULATION, payload: json}))
    .catch(e=> console.log(e)) 
}

export const getAllDetail = (payload) => async dispatch => {
    return await fetch(`http://localhost:3001/countries/${payload}`)
    .then(respose => respose.json())
    .then (json => dispatch({type:GET_ALL_DETAIL, payload:json}))
    .catch(e => console.log(e))
}

export const postActivity = (payload) => {
    return async () => {
        try {
            const response = await axios.post(RUTA_POST_ACTIVITY, payload);
            return response
        }catch (e) {
            console.log(e)
        }
    }
}

export const filterByActivity = (payload) => {
    console.log(payload)
    return {
        type: FILTER_BY_ACTIVITY, 
        payload
    }
}

export const filterByRegion = (payload) => {
    return {
        type: FILTER_BY_REGION,
        payload
    }
}


 export const detailVacio = () => {
     return ({
         type:DETAIL_VACIO
     })
 }
