import axios from 'axios';
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
export const FILTER_BY_ACTIVITY = 'FILTER_BY_ACTIVITY';
export const FILTER_BY_REGION = 'FILTER_BY_REGION ';
// export const ORDER_BY_NAME_AZ = 'ORDER_BY_NAME_AZ';
// export const ORDER_BY_NAME_ZA = 'ORDER_BY_NAME_ZA ';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_POPULATION_MIN = 'ORDER_BY_POPULATION_ASC ';
export const ORDER_BY_POPULATION_MAX = 'ORDER_BY_POPULATION_DES';
export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION';
export const GET_ALL_DETAIL = 'GET_ALL_DETAIL';
export const GET_ACTITIVIIES = 'GET_ACTITIVIIES'; //me cree un ruta que las trae
export const POST_ACTIVITY = 'POST_ACTIVITY';
export const DETAIL_VACIO ='DETAIL_VACIO' 

const RUTA_GET_ACTIVITIES = 'http://localhost:3001/activities/get'
const RUTA_GET_COUNTRY = 'http://localhost:3001/countries/get'
const RUTA_POST_ACTIVITY = 'http://localhost:3001/activities/create'
const RUTA_ORDER_BY_NAME = 'http://localhost:3001/orden/name'

// Actions Home : getAllCountry, searchByName
export const getAllCountry = () => async dispatch => {
    return await fetch(RUTA_GET_COUNTRY)
       .then(respose => respose.json())
       .then (json => dispatch ({type:GET_ALL_COUNTRIES, payload: json}))
       .catch(e=> console.log(e))       
}


export const searchByName = (name) => async dispatch => {
    console.log(name)
    return await fetch( `${RUTA_GET_COUNTRY}/?name=${name}`)
    .then(respose => respose.json())
    .then(json => dispatch({type: SEARCH_BY_NAME, payload: json}))
    .catch(() => alert (`No se encontró ${name}, intentelo nuevamente`) )
}

export const getActivities = () => async dispatch => {
    return await fetch(RUTA_GET_ACTIVITIES)
    .then(respose => respose.json())
    .then (json => dispatch ({type: GET_ACTITIVIIES, payload: json}))
}

export const orderByName = (orden) => async dispatch => {
    return await fetch(`${RUTA_ORDER_BY_NAME}/?orden=${orden}`)
    .then(respose => respose.json())
    .then (json => dispatch ({type: ORDER_BY_NAME, payload: json}))
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

// export const orderByName = (name) =>{
//     console.log(name)
//     return {
//         type: ORDER_BY_NAME,
//         payload: name
//     }
// }

// export const orderByNameAZ = (payload) => {
//     console.log(payload)
//     return {
//         type: ORDER_BY_NAME_AZ,
//         payload
//     }
// }

// export const orderByNameZA = (payload) => {
//     console.log(payload)
//     return{
//         type: ORDER_BY_NAME_ZA,
//         payload
//     }
// }

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
// export const getAllDetail = (payload) => async dispatch => {
//     console.log (payload)
//     return await fetch (`http://localhost:3001/countries/${payload}`)
//     .then (respose => respose.json())
//     .then (json => dispatch ({type:GET_ALL_DETAIL, payload:json}))
//     .catch(e => console.log(e))
    
// }

export function getAllDetail (payload) {
    console.log(payload)
    return async function (dispatch) {
        try {
            var json = await axios.get (`http://localhost:3001/countries/${payload}`);
            return dispatch ({type: GET_ALL_DETAIL, payload: json.data})
        } catch (error) {
            console.log(error)
        }
    }
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

 export function detailVacio () {
     return ({
         type:DETAIL_VACIO
     })
 }
