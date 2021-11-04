require("dotenv").config();
const program = require("commander");
const initializeServer = require("./server/index");

program.option("-p, --port <port>");
program.parse(process.argv);
const [consolePort] = process.argv.slice(3);

const port =
  consolePort === undefined
    ? process.env.SERVER_LOCAL_PORT || 8000
    : consolePort;

initializeServer(port);
