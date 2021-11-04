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

module.exports = developmentRouter;
