const debug = require("debug")("knowledgeThings:database");
const chalk = require("chalk");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_STRING_THINGS, (error) => {
  if (error) {
    debug(chalk.bgRedBright.white("No se ha podido iniciar la base de datos."));
    debug(chalk.bgRedBright.white(error.message));
    return;
  }
  debug(chalk.green("Conectado a la base de datos"));
});
