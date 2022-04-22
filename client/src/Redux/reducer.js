import { GET_ALL_COUNTRIES, SEARCH_BY_NAME, FILTER_BY_ACTIVITY, FILTER_BY_REGION, ORDER_BY_NAME_AZ, ORDER_BY_NAME_ZA, ORDER_BY_POPULATION_MIN,
ORDER_BY_POPULATION_MAX, ORDER_BY_POPULATION, GET_ALL_DETAIL, GET_ACTITIVIIES, POST_ACTIVITY, DETAIL_VACIO} from './actions' 

const initialState = {
   countries : [],
   allCountries : [],
   activities: [],
   countDetail: {},
}

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            };
        case GET_ALL_DETAIL:
            return{
                ...state,
                countDetail: action.payload
            }
        case DETAIL_VACIO:
            return{
                ...state,
                countDetail: {}
            }
        case SEARCH_BY_NAME:
            return {
                ...state,
                countries: action.payload
            };
        case POST_ACTIVITY:
            return {
                ...state,
                activities: action.payload
            }
        case GET_ACTITIVIIES:
            return{
                ...state,
                activities: action.payload
            }
        case FILTER_BY_REGION:
            const countries = state.allCountries;
            let filteredCs = action.payload === 'AllCont'? countries : countries.filter(c => c.region === action.payload);
            return {
                ...state,
                countries: filteredCs
            };    
        case ORDER_BY_NAME_AZ:
                // let sortRace = state.races 
        let resultsAZ = state.allCountries.sort(function(a, b){
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
            });
            console.log(resultsAZ)
            return {
                ...state,
                countries: resultsAZ
            };
        case ORDER_BY_NAME_ZA:
                let resultsZA = state.allCountries.sort(function(a, b){
                    if (a.name > b.name) return -1;
                    if (a.name < b.name) return 1;
                    return 0;
                });
                return {
                    ...state,
                    countries: resultsZA
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
         };
            default: return {...state}
    }
}

export default rootReducer;