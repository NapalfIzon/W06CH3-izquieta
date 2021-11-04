const { Schema, model } = require("mongoose");

const developmentSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
});

module.exports = model("development", developmentSchema, "development"); // TODO preguntar en clase mañana
