const chalk = require("chalk");
const debug = require("debug")("knowledgeThings:indexServer");
const express = require("express");
const morgan = require("morgan");
const developmentRoutes = require("./routes/developmentRoutes");
const productionRoutes = require("./routes/productionRoutes");

const app = express();

app.use(morgan("dev"));

const initializeServer = (portNumber) => {
  const server = app.listen(portNumber, () => {
    debug(chalk.yellow(`Escuchando en el puerto ${portNumber}`));
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

app.use("/development", developmentRoutes);
app.use("/production", productionRoutes);

module.exports = initializeServer;
