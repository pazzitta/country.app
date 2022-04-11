const {Router} = require ('express');
const {createActivity} = require ('../controllers/ActivitiesControl')

const router = Router()

router.post('/create', createActivity);


module.exports = router;