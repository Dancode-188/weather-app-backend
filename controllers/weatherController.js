const WeatherData = require('../models/weatherModel');

const getCurrentWeather = async (req, res) => {
  try {
    const { location } = req.query;
    const weatherData = await WeatherData.findOne({ location });
    if (!weatherData) {
      return res.status(404).json({ error: 'Weather data not found' });
    }
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Implement other weather controller functions

module.exports = {
  getCurrentWeather,
  // Export other weather controller functions
};
