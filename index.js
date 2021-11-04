require("dotenv").config();
const inquirer = require("inquirer");
const initializeServer = require("./server/index");

(async () => {
  const dbUSerData = await inquirer.prompt([
    {
      name: "port",
      type: "number",
      message: "¿En qué puerto quieres que se inicie la API?",
    },
    {
      name: "db",
      type: "list",
      message: "¿Qué base de datos quieres usar?",
      choices: [
        {
          name: "Pruebas",
          value: "development",
        },
        {
          name: "Producción",
          value: "production",
        },
      ],
      default: "Pruebas",
    },
    {
      name: "userType",
      type: "confirm",
      message:
        "¿Quieres permitir que los clientes puedan crear, borrar y modificar?",
      default: false,
    },
  ]);
  initializeServer(dbUSerData);
})();
