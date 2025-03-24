const {Router} = require('express');
const router = Router();

const controller = require('../controllers/liftController');

router.get('/', controller.getHome);
router.get('/lifts', controller.getLifts);

router.get("/newLift", controller.getNewLift);
router.post("/newLift", controller.postNewLift);

router.get("/:id/update", controller.getUpdateLift);
router.post("/:id/update", controller.postUpdateLift);

router.post("/:id/delete", controller.deleteLift);
module.exports = router;