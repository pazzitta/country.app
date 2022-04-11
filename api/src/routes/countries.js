const {Router} = require ('express');
const {getAllAndByName, getOneById} = require ('../controllers/CountriesControl')


const router = Router()

router.get ('/get', getAllAndByName);
router.get ('/:id', getOneById);

module.exports = router;