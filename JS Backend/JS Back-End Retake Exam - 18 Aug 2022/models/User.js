const { Schema, model } = require("mongoose");

const EMAIL_PATTERN = /^([a-zA-Z0-9]+)@([a-zA-Z]+).([a-zA-Z]+)$/;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    minLength: [4, "Username must be at least 4 characters long."],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    minLength: [10, "Ëmail must be at least 10 characters long."],
    validate: {
      validator(value) {
        return EMAIL_PATTERN.test(value);
      },
      message: "Email must be valid.",
    },
  },
  hashedPassword: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema);

module.exports = User;
