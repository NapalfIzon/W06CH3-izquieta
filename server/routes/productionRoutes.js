const chalk = require("chalk");
const debug = require("debug")("knowledgeThings:productionRoutes");
const express = require("express");
const Production = require("../../database/models/production");

const productionRouter = express.Router();

productionRouter.get("/", async (req, res) => {
  const productionInfo = await Production.find();
  res.json(productionInfo);
  debug(chalk.blue("Se ha realizado un GET contra BBDD production"));
});

module.exports = productionRouter;
