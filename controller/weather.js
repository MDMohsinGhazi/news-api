const axios = require("axios");

exports.getWeather = async (req, res, next) => {
  const { lat = 28.6448, lon = 77.216721 } = req.query;
  try {
    const data = await axios(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`
    );
    res.status(200).json({
      city: data.data.name,
      temp: data.data.main.temp,
      feels_like: data.data.main.feels_like,
      humidity: data.data.main.humidity,
      weather: data.data.weather[0].description,
    });
  } catch (error) {
    next(error);
  }
};
