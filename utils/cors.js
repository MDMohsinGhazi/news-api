const cors = require("cors");

const corsOptions = {
  origin: [/^http:\/\/localhost:[0-9]+/],
  optionsSuccessStatus: 200,
};

module.exports = cors(corsOptions);
