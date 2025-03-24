const {Router} = require('express');
const router = Router();

const controller = require('../controllers/liftController');

router.get('/', controller.getHome);
router.get('/lifts', controller.getLifts);

router.get("/newLift", controller.getNewLift);
router.post("/newLift", controller.postNewLift);

module.exports = router;