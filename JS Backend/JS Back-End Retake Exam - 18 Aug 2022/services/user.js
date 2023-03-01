const User = require("../models/User");
const { hash, compare } = require("bcrypt");

async function register(username, email, password) {
  const existing = await getUserByEmail(email);

  if (password.length < 3) {
    throw new Error("Password must be at least 3 characters long.");
  }

  if (existing) {
    throw new Error("Email is taken.");
  }

  const hashedPassword = await hash(password, 10);
  const user = new User({
    username,
    email,
    hashedPassword,
  });

  await user.save();
  return user;
}

async function login(email, password) {
  const user = await getUserByEmail(email);

  if (!user) {
    throw new Error("Invalid credentials.");
  }

  const hasMatch = await compare(password, user.hashedPassword);
  if (!hasMatch) {
    throw new Error("Invalid credentials.");
  }

  return user;
}

async function getUserByEmail(email) {
  const user = await User.findOne({ email: new RegExp(`^${email}$`, "i") });
  return user;
}

module.exports = {
  login,
  register,
};
