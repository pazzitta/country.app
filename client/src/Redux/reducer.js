import { GET_ALL_COUNTRIES, SEARCH_BY_NAME, FILTER_BY_ACTIVITY, FILTER_BY_REGION, ORDER_BY_NAME_AZ, ORDER_BY_NAME_ZA, ORDER_BY_POPULATION_ASC,
ORDER_BY_POPULATION_DES, GET_ALL_DETAIL, GET_ACTITIVIIES, POST_ACTIVITY} from './actions' 

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
            default: return {...state}

    }
}

export default rootReducer;