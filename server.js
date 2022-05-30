const express = require("express");
const dotenv = require("dotenv");

const errorHandler = require("./middleware/error");

// Load environment variable
dotenv.config({ path: "./config/config.env" });

// Router files
const news = require("./router/news");
const weather = require("./router/weather");

const app = express();

// json parser
app.use(express.json());

//Mount router
app.use("/news", news);
app.use("/weather", weather);

app.all("*", (req, res, next) => {
  next(new ErrorResponse(`can't find ${req.originalUrl}`, 404));
});

//error handler middleWare
app.use(errorHandler);

//PORT
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`);
});

process.on("unhandledRejection", (error) => {
  console.log("Error", error.message);
  server.close(() => {
    process.exit(1);
  });
});
