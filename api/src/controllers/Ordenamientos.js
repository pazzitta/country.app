const {Country, Activity} = require ('../db')

const sortName = async (req, res, next) => {
    const {orden} = req.query
    const allInfoCoun =  await Country.findAll()

try {

    const sortName = orden === 'AllN'? allInfoCoun : orden === 'Asc'? allInfoCoun.sort((a, b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0
            } ) : allInfoCoun.sort((a, b) => {
                if (a.name > b.name) return -1;
                if (a.name < b.name) return 1;
                return 0
            })  
            console.log(sortName)
            res.send (sortName)
}catch (error){
    next(error)
}
}

const sortPopulation = async (req, res, next) =>{
    const {orden} = req.query
    const allInfoCounP =  await Country.findAll() 
    
    try {
    const sortPopulation = orden === 'AllP'? allInfoCounP : orden === 'Min' ? allInfoCounP.sort ((a,b)=> a.population - b.population) : 
    allInfoCounP.sort((a,b)=> b.population - a.population)
    console.log(sortPopulation)
    res.send(sortPopulation)

    }catch (error) {
        next(error)
    }
}

module.exports = {
    sortName,
    sortPopulation
}