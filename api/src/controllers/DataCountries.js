const axios = require ('axios');
const {Country, Activity} = require ('../db');

// const allInfoNecCountries = async ( req, res, next ) => {
//     try {
//       const pedidoApi = await axios("https://restcountries.com/v3/all") 
//       const dataApi = await pedidoApi.data 
      
//       const dataNecRpAndRd = await dataApi?.map (d => {       
//               return {
//                   id: d.cca3,
//                   name: d.name.common,
//                   flags: d.flags[0],
//                   region: d.region? d.region: "No se ha encontrado región",
//                   capital: d.capital? d.capital[0] : "No se ha encontrado la capital",
//                   subregion: d.subregion? d.subregion : "No se ha ancontrado subregión",
//                   area: d.area,
//                   population: d.population
//               }
//             });
            
//             dataNecRpAndRd.map( async (el) => {
//                 try{
//                     await Country.Create({
//                        where: { 
//                            id: el.id,
//                            name: el.name,
//                            flags: el.flags,
//                            region: el.region,
//                            capital: el.capital,
//                            subregion: el.subregion,
//                            area: el.area,
//                            population: el.population
//                        },
//                    })
//                 }catch (error) {
//                     console.log(error)
//                 }
//             }); 
//             const searchInDb = await Country.findAll()
            
//             // console.log(searchInDb)
//             return searchInDb;
   
//         }catch (error) {
//             next (error)
//     };
// }

const allInfoNecCountries = async ( ) => {
    try {
        const pedidoApi = await axios("https://restcountries.com/v3/all") 
        const dataApi = await pedidoApi.data 
        
        const dataNecRpAndRd = await dataApi?.map (d => {       
                return {
                    id: d.cca3,
                    name: d.name.common,
                    flags: d.flags[0],
                    region: d.region? d.region: "No se ha encontrado región",
                    capital: d.capital? d.capital[0] : "No se ha encontrado la capital",
                    subregion: d.subregion? d.subregion : "No se ha ancontrado subregión",
                    area: d.area,
                    population: d.population
                }
              });
        
     await Country.bulkCreate(dataNecRpAndRd)     
    // //     const searchInDb = await Country.findAll();
        // console.log(dataNecRpAndRd)
        return dataNecRpAndRd;
   
        }catch (error) {
        console.log ('No anda allInfoNecCountries')
    };
}


module.exports = {
    allInfoNecCountries
}