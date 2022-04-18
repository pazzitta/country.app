import { GET_ALL_COUNTRIES, SEARCH_BY_NAME, FILTER_BY_ACTIVITY, FILTER_BY_REGION, ORDER_BY_NAME_AZ, ORDER_BY_NAME_ZA, ORDER_BY_POPULATION_MIN,
ORDER_BY_POPULATION_MAX, GET_ALL_DETAIL, GET_ACTITIVIIES, POST_ACTIVITY} from './actions' 

const initialState = {
   countries : [],
   allCountries : [],
}

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            };
        case SEARCH_BY_NAME:
            return {
                ...state,
                countries: action.payload
            };
        case ORDER_BY_POPULATION_MIN:
        let sortPopMin = state.allCountries.sort((a,b)=> a.population - b.population)
        console.log (sortPopMin)    
            return{
                ...state,
                countries: sortPopMin
            }; 
        case ORDER_BY_POPULATION_MAX:
                let sortPopMax = state.allCountries.sort((a,b)=> b.population - a.population) 
                console.log(sortPopMax)   
                    return{
                        ...state,
                        countries: sortPopMax
                    }  
            default: return {...state}

    }
}

export default rootReducer;