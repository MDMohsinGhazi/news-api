const axios = require("axios");

exports.getQuotes = async (req, res, next) => {
  try {
    const quotes = await axios("https://type.fit/api/quotes");
    // console.log(quotes);
    const random = Math.floor(Math.random() * quotes.data.length);
    // console.log(random);

    res.status(200).json({
      success: true,
      quote: quotes.data[random],
    });
  } catch (error) {
    next(error);
  }
};
