const {Router} = require ('express');
const {createActivity, getAllActivities} = require ('../controllers/ActivitiesControl')

const router = Router()

router.get ('/get', getAllActivities);
router.post('/create', createActivity);


module.exports = router;