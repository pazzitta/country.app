const axios = require ('axios');
const {Country} = require ('../models/Country');

const allInfoNecCountries = async ( ) => {
    try {
      const pedidoApi = await axios("https://restcountries.com/v3/all") //traigo toda la info
      const dataApi = await pedidoApi.data //saco la data es un array de objetos

      const dataNecRpAndRd = dataApi?.map (d => {         // retorna un array de objetos
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
            })
            await Country.bulkCreate(dataNecRpAndRd)
        //   return dataNecRpAndRd       

    }catch (error) {
        console.log ('No anda allInfoNecCountries')
    };
}


module.exports = {
    allInfoNecCountries
}