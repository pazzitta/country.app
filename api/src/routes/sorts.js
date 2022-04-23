const {Router} = require ('express') 
const {sortName, sortPopulation} = require ('../controllers/Ordenamientos')

const router = Router()

router.get('/name', sortName)
// router.get ('/population', sortPopulation)

module.exports = router