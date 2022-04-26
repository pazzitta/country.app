const {allInfoNecCountries} = require ('./DataCountries')
const {Country, Activity} = require ('../db')
const { Op } = require('sequelize')

const getAllAndByName = async (req, res, next) => {     
    const {name} = req.query 
    try {
        const num_country= await Country.count()
        if(!num_country){
            await allInfoNecCountries()
        }
    
        if(name){
            const country = await Country.findAll({
                where : {
                   name: {
                       [Op.iLike]: `${name}%`
                       }
                   }
               })
            if(country.length===0){
                return res.status(404).send(`No se encontró país con el nombre ${name}`)
            }
            const dataNecRP = await country?.map (rpn => {
                return{
                    id: rpn.id,
                    name:rpn.name,
                    flags: rpn.flags,
                    region: rpn.region
                }
            })
            return res.json(dataNecRP)
        }

        else{    
            const countries = await Country.findAll({
                attributes: ["id", "name", "flags", "region"],
                include: [
                    {
                        model: Activity,
                        attributes:  ["name", "difficulty", "duration", "season"],
                        through: {
                            attributes: [],
                        }
                    }
                ]
            })

            return res.json(countries)
        }       
    
    }catch (error) {
        next (error)
    }

 
}
 
//ANDA TODO - VER MÁS TEORÍA A MEDIDA QUE PASAN LOS DÍAS. CUANDO QUIERE... CUANDO ESTAN LAS ACTIVITIES FALLA. Depende de la del name...
// const getOneById = async (req, res, next) => {
//     const {id} = req.params
//     try{
//         if (id){
//            let busqueda = await Country.findAll({
//                 where: {id: id},
//                 include: {
//                     model: Activity,
//                     attributes: ["name", "id", "difficulty", "duration", "season"],
//                     through: {
//                         attributes: []
//                     }
//                 }
//             })
//             // console.log(busqueda)
//             res.send(busqueda);

//         }

        
//     }catch (error) {
//         next(error)
//     }

// }
const getOneById = async (req, res, next) => {
   
    const {id} = req.params
    try { 
        const country = await Country.findByPk(id.toUpperCase(),{
            include: [
                {
                    model: Activity,
                    attributes:  ["name", "difficulty", "duration", "season"],
                    through: {
                        attributes: [],
                    }
                }
            ]
        })
        if(!country){
            return res.status(404).send(`No se encontro detalle del id ${id}`)
        }
        res.json(country)
        
    }catch (error) {
        next(error)
    }

}



module.exports = {
    getAllAndByName, 
    getOneById
}