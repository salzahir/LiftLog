const {Router} = require('express');
const router = Router();

const controller = require('../controllers/liftController');

router.get('/', controller.getHome);

router.get('/about', controller.getAbout);