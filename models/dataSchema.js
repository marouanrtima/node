const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// define structure (schema)
const articleSchema = new Schema({
  text: String,
});

const Mydata = mongoose.model("Mydataa", articleSchema);

module.exports = Mydata;
