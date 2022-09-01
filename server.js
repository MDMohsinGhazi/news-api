const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const helmet = require("helmet");
const cors = require("./utils/cors");
const favicon = require("serve-favicon");

const errorHandler = require("./middleware/error");
const ErrorResponse = require("./utils/errorResponse");

// Load environment variable
dotenv.config({ path: "./config/config.env" });

// Router files
const news = require("./router/news");
const weather = require("./router/weather");
const quotes = require("./router/quotes");

const app = express();

// Set security header
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    CrossOriginResourcePolicy: "cross-origin",
  })
);
// cors
app.options("*", cors);
app.use(cors);

// json parser
app.use(express.json());

//Static folder
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(express.static(path.join(__dirname, "public")));

//Mount router
app.use("/news-api/news", news);
app.use("/news-api/weather", weather);
app.use("/news-api/quotes", quotes);

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
