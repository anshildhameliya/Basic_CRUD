const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const User = mongoose.Schema({
   name: String,
   age: Number,
   gender: String,
   country: String
});
module.exports = new mongoose.model("user1", User);