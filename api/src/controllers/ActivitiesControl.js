const axios = require ('axios');
const {Activity, Country} = require ('../db')


//ANDA! HAY QUE REVISAR TEORÍA PARA ESTÁR SEGURA EN ESTOS TEMAS
const createActivity = async( req, res) => {
 try{
    const {name, difficulty, duration, season, countries} = req.body 
    const newActivity = await Activity.create ({
        name,
        difficulty, 
        duration, 
        season
    })
    let countriesDb = await Country.findAll({
        where: { name: countries },
      })

    await newActivity.addCountries(countriesDb);
    // console.log (newActivity)
    res.send(newActivity) 
  
  }catch (error) {
     console.log ('No anda createActivity')
 }
}

module.exports = {
    createActivity
}