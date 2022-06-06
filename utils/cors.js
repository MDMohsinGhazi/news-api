const cors = require("cors");

const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:5000"],
  optionsSuccessStatus: 200,
};

module.exports = cors(corsOptions);
