const debug = require("debug")("knowledgeThings:errors");

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  debug("Se ha detectado el siguiente error: ", error.message);
  res.status(error.code || 500).json({ error: error.message });
};

module.exports = {
  errorHandler,
};
