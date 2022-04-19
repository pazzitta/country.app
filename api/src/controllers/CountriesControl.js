const {allInfoNecCountries} = require ('./DataCountries')
const {Country, Activity} = require ('../db')
const { Op } = require('sequelize')

//ANDA TODO, pero no inclute solo la info de la rura principal...ver como hacer luego, cuando ande todo
const getAllAndByName = async (req, res, next) => {     
    const {name} = req.query 
    try {
        const num_country= await Country.count()
        if(!num_country){
            await allInfoNecCountries()
        }
    
        if(!name){
            const searchInDb = await Country.findAll({ include: {
                model: Activity,
                attributes: {
                    include: ["name", "id"]
                },
                through: {
                    attributes: []
                }
            }
        });
           return res.send (searchInDb)
        } else {
            let database = await Country.findAll({
                where: {
                    name: { 
                        [Op.iLike]: `${name}%`}
                },
                include: {
                    model: Activity,
                    attributes: ["name"],
                    through: {
                        attributes: []
                    }
                }
            })
           return res.send (database)
        }
    }catch (error) {
        next (error)
    }

 
}
 
//ANDA TODO - VER MÁS TEORÍA A MEDIDA QUE PASAN LOS DÍAS.
const getOneById = async (req, res, next) => {
    const {id} = req.params
    try{
        if (id){
           let busqueda = await Country.findAll({
                where: {id: id},
                include: {
                    model: Activity,
                    attributes: ["name", "id", "difficulty", "duration", "season"],
                    through: {
                        attributes: []
                    }
                }
            })
            // console.log(busqueda)
            res.send(busqueda);

        }

        
    }catch (error) {
        next(error)
    }

}

// const getById = async (req, res, next) => {
//     const {id} = req.params  
//     try{
//     const allInfoById = await getoneByIdApi(id);
//     if (id.length < 4) {
//             let infoNecId = allInfoById?.map (el => {
//                 let weigth1 = '';
//                 if (el.weight.metric === "NaN") {
//                    weigth1 = "27 - 34"
//                 } else if (el.weight.metric.split(" - ")[0] === "NaN") {
//                     weigth1 = "6 - 8"
//                 } else {
//                     weigth1 = el.weight.metric
//                 }
//                 return {
//                     image: el.image.url,
//                     name: el.name,
//                     temperament: el.temperament? el.temperament : 'Perrito sin temperamento',
//                     weight: weigth1,
//                     height: el.height.metric,
//                     life_span: el.life_span
//                 }
//             })
//             infoNecId.length === 0?
//             res.status(404).send ('No se encontró el perrito requerido, intentelo de nuevo'):
//             res.send (infoNecId)
//         } else {
//             let infoDbById = await getDogsForIdDb (id);
//             console.log (infoDbById)            
//             return res.json(infoDbById)
//         }
//     } catch (error) {
//         next (error)
//     }

// };

module.exports = {
    getAllAndByName, 
    getOneById
}