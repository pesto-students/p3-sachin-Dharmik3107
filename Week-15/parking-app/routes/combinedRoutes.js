const addVehicle = require('../controllers/entrance');
const router = require('express').Router();

router.post('/addvehicle',addVehicle);

module.exports = router;