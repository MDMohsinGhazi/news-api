const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  if (err instanceof ErrorResponse) {
    res.status(err.statusCode).json(err.message);
    return;
  }
  res.status(500).json(err.message || "Somthing went wrong");
};

module.exports = errorHandler;
