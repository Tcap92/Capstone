const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
  anime_name: {
    type: String,
    required: true
  },
  anime_img: {
    type: String
  },
  facts: {
    type: [Object],
    required: true
  }
});

const Show = mongoose.model("Show", showSchema);

module.exports = {
  schema: showSchema,
  model: Show
};
