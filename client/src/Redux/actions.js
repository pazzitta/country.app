const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
const FILTER_BY_ACTIVITY = 'FILTER_BY_ACTIVITY';
const FILTER_BY_REGION = 'FILTER_BY_REGION ';
const ORDER_BY_NAME_AZ = 'ORDER_BY_NAME_AZ';
const ORDER_BY_NAME_ZA = 'ORDER_BY_NAME_ZA ';
const ORDER_BY_POPULATION_ASC = 'ORDER_BY_POPULATION_ASC ';
const ORDER_BY_POPULATION_DES = 'ORDER_BY_POPULATION_DES';
const GET_ALL_DETAIL = 'GET_ALL_DETAIL';
const GET_ACTITIVIIES = 'GET_ACTITIVIIES'; //me cree un ruta que las trae
const POST_ACTIVITY = 'POST_ACTIVITY'

const LOCAL_HOST = 'http://localhost:3001/'
const RUTA_GET_ACTIVITIES = 'http://localhost:3001/activities/get'
const RUTA_GET_COUNTRY = 'http://localhost:3001/countries/get'
const RUTA_POST_ACTIVITY = 'http://localhost:3001/activities/create'

// Actions Home : getAllCountry, searchByName
export const getAllCountry = () => async dispatch => {
    return await fetch(RUTA_GET_COUNTRY)
       .then(respose => respose.json())
       .then (json => dispatch ({type:GET_ALL_COUNTRIES, payload: json}))       
}

export const searchByName = (payload) => async dispatch => {
    return await fetch( `RUTA_GET_COUNTRY7/?name=${payload}`)
    .then(respose => respose.json())
    .then(json => dispatch({type: SEARCH_BY_NAME, payload: json}))
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

export const orderByPopulationAsc = (payload) => {
    return {
        type: ORDER_BY_POPULATION_ASC,
        payload
    }
}

export const orderByPopulationDes = (payload) => {
    return {
        type: ORDER_BY_POPULATION_DES,
        payload
    }
}

// Actions ruta Detail: allInfoDetail, getActivities
export const getAllDetail = (payload) => async dispatch => {
    return await fetch (`LOCAL_HOST/countries/${payload}`)
    .then (respose => respose.json())
    .then (json => dispatch ({type:GET_ALL_DETAIL, payload:json}))
}
// Actions ruta Create : postActivity 
 //FALTA VER COMO HACERLO CON FETCH