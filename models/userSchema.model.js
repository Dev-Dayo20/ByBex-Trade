const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  else {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  }
});

userSchema.method.comparePassword = async (password) => {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("login", userSchema);
module.exports = User;
