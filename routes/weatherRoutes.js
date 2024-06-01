const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

router.get('/current', weatherController.getCurrentWeather);
router.get('/forecast', weatherController.getWeatherForecast);
router.get('/alerts', weatherController.getWeatherAlerts);
router.get('/history', weatherController.getWeatherHistory);

module.exports = router;
