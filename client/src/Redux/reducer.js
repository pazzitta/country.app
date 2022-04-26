import { GET_ALL_COUNTRIES, SEARCH_BY_NAME, FILTER_BY_ACTIVITY, FILTER_BY_REGION, ORDER_BY_POPULATION_MIN,
ORDER_BY_POPULATION_MAX, ORDER_BY_POPULATION, GET_ALL_DETAIL, GET_ACTITIVIIES, POST_ACTIVITY, DETAIL_VACIO, ORDER_BY_NAME} from './actions' 

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
        case FILTER_BY_ACTIVITY:
            const countriesA = state.allCountries
            console.log(countriesA)
            let filterA = action.payload === 'None' ? countriesA : countriesA.filter(a => {
                const activitiesF = a.activities.map (ac => ac.name); //esto es analogo a a.activities
                return activitiesF.includes(action.payload) //y esto a === action.payload
            }) 
            console.log(filterA)
            return{
                ...state,
                countries: filterA 
            };
        case FILTER_BY_REGION:
            const countries = state.allCountries;
            let filteredCs = action.payload === 'AllCont'? countries : countries.filter(c => c.region === action.payload);
            console.log(filteredCs)
            return {
                ...state,
                countries: filteredCs 
            };
        case ORDER_BY_NAME :
            return {
                ...state,
                countries: action.payload
            }
        case ORDER_BY_POPULATION:
            return {
                ...state,
                countries: action.payload
            }
        // case ORDER_BY_NAME:
        //     const stateCountry = state.allCountries
        //     const sortName = action.payload === 'AllN'? stateCountry : action.payload === 'Asc'? stateCountry.sort((a, b) => {
        //         if (a.name > b.name) return 1;
        //         if (a.name < b.name) return -1;
        //         return 0
        //     } ) : stateCountry.sort((a, b) => {
        //         if (a.name > b.name) return -1;
        //         if (a.name < b.name) return 1;
        //         return 0
        //     })  
        //     console.log(sortName)
        //     return {
        //         ...state,
        //         countFil: sortName
        //     }     
        // case ORDER_BY_POPULATION_MIN:
        // let sortPopMin = state.allCountries.sort((a,b)=> a.population - b.population)
        // console.log (sortPopMin)    
        //     return{
        //         ...state,
        //         countries: sortPopMin
        //     }; 
        // case ORDER_BY_POPULATION_MAX:
        // let sortPopMax = state.allCountries.sort((a,b)=> b.population - a.population) 
        // console.log(sortPopMax)   
        //     return{
        //         ...state,
        //         countries: sortPopMax
        //  };
            default: return {...state}
    }
}

export default rootReducer;