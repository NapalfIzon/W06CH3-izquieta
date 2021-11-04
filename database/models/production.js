const { Schema, model } = require("mongoose");

const productionSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
});

module.exports = model("production", productionSchema, "production"); // TODO preguntar en clase mañana
