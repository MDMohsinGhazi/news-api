const axios = require("axios");

exports.getWeather = async (req, res, next) => {
  console.log(req.query);
  try {
    const data = await axios(
      `https://api.openweathermap.org/data/2.5/weather?lat=${req.query.lat}&lon=${req.query.lon}&appid=${process.env.WEATHER_API_KEY}`
    );
    console.log(data);
    res.status(200).json({
      data: data.data,
    });
  } catch (error) {
    next(error);
  }
};
