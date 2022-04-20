import axios from 'axios';
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
export const FILTER_BY_ACTIVITY = 'FILTER_BY_ACTIVITY';
export const FILTER_BY_REGION = 'FILTER_BY_REGION ';
export const ORDER_BY_NAME_AZ = 'ORDER_BY_NAME_AZ';
export const ORDER_BY_NAME_ZA = 'ORDER_BY_NAME_ZA ';
export const ORDER_BY_POPULATION_MIN = 'ORDER_BY_POPULATION_ASC ';
export const ORDER_BY_POPULATION_MAX = 'ORDER_BY_POPULATION_DES';
export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION';
export const GET_ALL_DETAIL = 'GET_ALL_DETAIL';
export const GET_ACTITIVIIES = 'GET_ACTITIVIIES'; //me cree un ruta que las trae
export const POST_ACTIVITY = 'POST_ACTIVITY'

const LOCAL_HOST = 'http://localhost:3001/'
const RUTA_GET_ACTIVITIES = 'http://localhost:3001/activities/get'
const RUTA_GET_COUNTRY = 'http://localhost:3001/countries/get'
const RUTA_POST_ACTIVITY = 'http://localhost:3001/activities/create'

// Actions Home : getAllCountry, searchByName
export const getAllCountry = () => async dispatch => {
    return await fetch(RUTA_GET_COUNTRY)
       .then(respose => respose.json())
       .then (json => dispatch ({type:GET_ALL_COUNTRIES, payload: json}))
       .catch(e=> console.log(e))       
}

export const searchByName = (payload) => async dispatch => {
    return await fetch( `${RUTA_GET_COUNTRY}/?name=${payload}`)
    .then(respose => respose.json())
    .then(json => dispatch({type: SEARCH_BY_NAME, payload: json}))
    .catch(() => alert ('No se encontró el país buscado, intentelo nuevamente') )
}
// SELECT: getActivities,filterByActivity, filterByRegion, orderByNameAZ, orderByNameZA, orderByPopulationAsc, orderByPopulationDes.

export const getActivities = () => async dispatch => {
    return await fetch(RUTA_GET_ACTIVITIES)
    .then(respose => respose.json())
    .then (json => dispatch ({type: GET_ACTITIVIIES, payload: json}))
}

export const filterByActivity = (payload) => {
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

export const orderByNameAZ = (payload) => {
    return {
        type: ORDER_BY_NAME_AZ,
        payload
    }
}

export const orderByNameZA = (payload) => {
    return{
        type: ORDER_BY_NAME_ZA,
        payload
    }
}

export const orderByPopulationMin = (payload) => {
    console.log(payload)
    return {
        type: ORDER_BY_POPULATION_MIN,
        payload
    }
}

export const orderByPopulationMax = (payload) => {
    return {
        type: ORDER_BY_POPULATION_MAX,
        payload
    }
}

// Actions ruta Detail: allInfoDetail, getActivities
export const getAllDetail = (payload) => async dispatch => {
    console.log (payload)
    return await fetch (`http://localhost:3001/countries/${payload}`)
    .then (respose => respose.json())
    .then (json => dispatch ({type:GET_ALL_DETAIL, payload:json}))
}
// Actions ruta Create : postActivity 
 //FALTA VER COMO HACERLO CON FETCH

//  export const postActivity = (payload) => async dispatch =>{
//      return await fetch (RUTA_POST_ACTIVITY, {method:'POST', body: payload} )
//      .then (respose => respose.json())
//      .then (json => dispatch ({type:POST_ACTIVITY, payload:json}))
//  }
 export function postActivity(payload) {
     console.log(payload) 
    return async function() {
            var response = await axios.post(RUTA_POST_ACTIVITY, payload);
            console.log(response)
            return response;
    }
 }
