const axios = require ('axios');
const {Country} = require ('../db');


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
                    subregion: d.subregion? d.subregion : "No se ha encontrado subregión",
                    area: d.area,
                    population: d.population
                }
              });
            //   console.log(dataNecRpAndRd)
        
     await Country.bulkCreate(dataNecRpAndRd)     
    
        return dataNecRpAndRd;
   
        }catch (error) {
        console.log ('No anda allInfoNecCountries')
    };
}


module.exports = {
    allInfoNecCountries
}