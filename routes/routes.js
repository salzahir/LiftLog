const {Router} = require('express');
const router = Router();

const controller = require('../controllers/liftController');

router.get('/', controller.getHome);
router.get('/lifts', controller.getLifts);

module.exports = router;