const axios = require ('axios');
const {allInfoNecCountries} = require ('./DataCountries')
const {Country} = require ('../models/Country')

const getAllAndByName = async (req, res, next) => {
    try {
       const culo = await allInfoNecCountries (); 

        res.send (culo);    
        // const db = await allInfoNecCountries()  
    
    console.log(culo)

    // res.send (db)

    }catch (error) {
        next (error)
    }

 
}

const getOneById = () => {

}


module.exports = {
    getAllAndByName, 
    getOneById
}