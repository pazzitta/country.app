const {Country, Activity} = require ('../db')

const sortName = async (req, res, next) => {
    const {orden} = req.query
    const allInfoCoun =  await Country.findAll()
    console.log(allInfoCoun)
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

module.exports = {
    sortName
}