const NewsAPI = require("newsapi");
const ErrorResponse = require("../utils/errorResponse");
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

exports.topHeadlines = async (req, res, next) => {
  try {
    console.log(req.query);
    const articals = await newsapi.v2.topHeadlines({
      ...req.query,
      language: "en",
      country: "in",
    });

    res.status(200).json({
      data: articals,
    });
  } catch (error) {
    next(error);
  }
};
