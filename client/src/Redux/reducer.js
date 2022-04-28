import { GET_ALL_COUNTRIES, SEARCH_BY_NAME, FILTER_BY_ACTIVITY, FILTER_BY_REGION, ORDER_BY_POPULATION, GET_ALL_DETAIL, 
GET_ACTITIVIIES, POST_ACTIVITY, DETAIL_VACIO, ORDER_BY_NAME} from './actions' 

const initialState = {
   countries : [],
   allCountries : [],
   activities: [],
   countDetail: {}
}

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload,
            };
        case GET_ACTITIVIIES:
            return{
                ...state,
                activities: action.payload
            };
        case SEARCH_BY_NAME:
            return {
                ...state,
                countries: action.payload
            };
        case ORDER_BY_NAME :
            return {
                ...state,
                countries: action.payload
            };
        case ORDER_BY_POPULATION:
            return {
                ...state,
                countries: action.payload
            }
        case GET_ALL_DETAIL:
            return{
                ...state,
                countDetail: action.payload
            }
        case POST_ACTIVITY:
            return {
                ...state,
                activities: action.payload
            }
        case FILTER_BY_ACTIVITY:
        const countriesA = state.allCountries
        let filterA = action.payload === 'None' ? countriesA : countriesA.filter(a => {
                const activitiesF = a.activities.map (ac => ac.name); //esto es analogo a a.activities
                return activitiesF.includes(action.payload) //y esto a === action.payload
            }) 
            return{
                ...state,
                countries: filterA 
            };
        case FILTER_BY_REGION:
        const countries = state.allCountries;
        let filteredCs = action.payload === 'AllCont'? countries : countries.filter(c => c.region === action.payload);
            return {
                ...state,
                countries: filteredCs 
            };
        case DETAIL_VACIO:
            return{
                ...state,
                countDetail: {}
            }
            default: return {...state}
    }
}

export default rootReducer;