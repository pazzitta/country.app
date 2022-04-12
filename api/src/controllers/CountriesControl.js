const {allInfoNecCountries} = require ('./DataCountries')
const {Country, Activity} = require ('../db')

//ANDA TODO, REVISAR TEORÍA!
const getAllAndByName = async (req, res, next) => {     //en esta... tengo que incluir actividades y población para los filtros aunque no se muetren en las cards?
    try {
       const {name} = req.query 
       const allInfo = await allInfoNecCountries (); 
       const infoRp = await allInfo.map (e => {
           return {
            id: e.id,
            name: e.name,
            flags: e.flags,
            region: e.region
           }
       })

       if (name){
           let filterName = infoRp.filter (n => n.name.toLowerCase().includes(name.toString().toLowerCase())) // esto es fijate si el nombre que tenemos coincide en algun punto con el que recibo por query
           filterName.length > 0?
           res.send (filterName):
           res.send ('No se ha encontrado el país, intentelo nuevamente')
       } else {
           res.send(infoRp)
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