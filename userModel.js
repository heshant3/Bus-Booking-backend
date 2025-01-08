const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: String,
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("userdata", UserSchema);

module.exports = User;
