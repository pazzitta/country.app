const {Activity, Country} = require ('../db')


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

const getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll()
    res.send (activities)

  }catch (error) {
    console.log('no anda el getAllActivities')
  }
}

module.exports = {
    createActivity,
    getAllActivities
}