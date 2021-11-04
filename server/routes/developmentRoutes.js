const chalk = require("chalk");
const debug = require("debug")("knowledgeThings:developmentRoutes");
const express = require("express");
const Development = require("../../database/models/development");

const developmentRouter = express.Router();

developmentRouter.get("/", async (req, res) => {
  const developmentInfo = await Development.find();
  res.json(developmentInfo);
  debug(chalk.blueBright("Se ha realizado un GET contra BBDD development"));
});

developmentRouter.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const searchedThing = await Development.findById(id);
    if (searchedThing) {
      res.json(searchedThing);
    } else {
      const error = new Error("Tecnología aprendida no encontrada");
      error.code = 404;
      throw error;
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
});

module.exports = developmentRouter;
