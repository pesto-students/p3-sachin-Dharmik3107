//using express router functionality for endpoint response to client request
const express = require('express');
const router = express.Router();
//importing all the function created in controller file
const { WeatherData, ForecastData, currentData, filterData } = require('../Controller/controller');

//creating a route through all function
router.post('/multipleCities', WeatherData);

router.post('/forecastData', ForecastData);

router.post('/currentData', currentData);

router.post('/filterData', filterData);

module.exports = router;