const chalk = require("chalk");
const debug = require("debug")("knowledgeThings:developmentRoutes");
const express = require("express");
const Development = require("../../database/models/development");

const developmentRouter = express.Router();

developmentRouter.get("/", async (req, res) => {
  const developmentInfo = await Development.find();
  res.json(developmentInfo);
  debug(
    chalk.blueBright("Se ha realizado un GET general contra BBDD development")
  );
});

developmentRouter.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const searchedThing = await Development.findById(id);
    if (searchedThing) {
      res.json(searchedThing);
      debug(
        chalk.blueBright(
          "Se ha realizado un GET a un id específico contra BBDD development"
        )
      );
    } else {
      const error = new Error(
        "No es posible mostrar la información solicitada, valor no encontrado."
      );
      error.code = 404;
      throw error;
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
});

developmentRouter.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const newThingsList = await Development.findByIdAndDelete(id);
    if (newThingsList) {
      res.json(newThingsList);
      debug(
        chalk.blueBright(
          "Se ha realizado un DELETE a un id específico contra BBDD development"
        )
      );
    } else {
      const error = new Error(
        "No es posible eliminar la tecnología aprendida solicitada, valor no encontrado."
      );
      error.code = 404;
      throw error;
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
});

module.exports = developmentRouter;
