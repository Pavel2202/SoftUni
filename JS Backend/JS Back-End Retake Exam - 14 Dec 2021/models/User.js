const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    minlength: [4, "Username must be at least 4 characters long."],
  },
  hashedPassword: { type: String },
  address: {
    type: String,
    minlength: [1, "Address is required."],
    maxlength: [20, "Address must be no more than 20 characters long."],
  },
});

userSchema.index(
  { username: 1 },
  {
    unique: true,
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const User = model("User", userSchema);

module.exports = User;
