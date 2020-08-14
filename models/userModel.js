const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  //unique is true helps us have only one account with one email id
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 8 },
  uniqueOrganizationCode: { type: String, required: true },
});

module.exports = User = mongoose.model("user", userSchema);
