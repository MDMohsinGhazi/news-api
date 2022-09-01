const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

// Fetch Top Headlines

exports.topHeadlines = async (req, res, next) => {
  try {
    const articals = await newsapi.v2.topHeadlines({
      ...req.query,
      language: "en",
      country: "in",
    });

    res.status(200).json({
      ...articals,
    });
  } catch (error) {
    next(error);
  }
};

// Fetch all news
exports.everything = async (req, res, next) => {
  try {
    const articals = await newsapi.v2.everything({
      ...req.query,
      from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      to: new Date(),
      language: "en",
      sortBy: "relevancy",
    });
    res.status(200).json({
      ...articals,
    });
  } catch (error) {
    next(error);
  }
};
