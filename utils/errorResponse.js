class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
  static badRequest(msg) {
    return new ErrorResponse(400, msg);
  }

  static internal(msg) {
    return new ErrorResponse(500, msg);
  }
}

module.exports = ErrorResponse;
