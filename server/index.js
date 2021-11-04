const chalk = require("chalk");
const debug = require("debug")("knowledgeThings:indexServer");
const express = require("express");
const morgan = require("morgan");
const mongoDbInitialize = require("../database/index");
const { errorHandler } = require("./error");
const developmentRoutes = require("./routes/developmentRoutes");
// const productionRoutes = require("./routes/productionRoutes");

const app = express();
let portNumber;

app.use(morgan("dev"));
const initializeServer = ({ port }) => {
  portNumber = port || 8000;

  const server = app.listen(port, () => {
    debug(chalk.yellow(`Escuchando en el puerto ${portNumber}`));
    mongoDbInitialize(); // TODO preguntar porque hay que hacerlo así, porque sino se inicializaba solo
  });

  server.on("error", (error) => {
    debug(
      chalk.bgRedBright.white("Ha habido un error al iniciar el servidor.")
    );
    if (error.code === "EADDRINUSE") {
      debug(chalk.bgRedBright.white(`El puerto ${portNumber} está en uso.`));
    } else {
      debug(chalk.bgRedBright.white(`Error inesperado: ${error.message}`));
    }
  });
};

app.use(morgan("dev"));
app.use(express.json());

app.use(`/development`, developmentRoutes);

app.use(errorHandler);

module.exports = initializeServer;
