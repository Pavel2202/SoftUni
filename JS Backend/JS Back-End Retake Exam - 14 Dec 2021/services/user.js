const User = require("../models/User");
const { hash, compare } = require("bcrypt");

async function register(username, password, address) {
  const existing = await getUserByUsername(username);

  if (existing) {
    throw new Error("User with that username already exists.");
  }

  const hashedPassword = await hash(password, 10);
  const user = new User({
    username,
    hashedPassword,
    address,
  });

  await user.save();
  return user;
}

async function login(username, password) {
  const user = await getUserByUsername(username);

  if (!user) {
    throw new Error("Invalid credentials.");
  }

  const hasMatch = await compare(password, user.hashedPassword);
  if (!hasMatch) {
    throw new Error("Invalid credentials.");
  }

  return user;
}

async function getUserById(id) {
  return await User.findById(id);
}

async function getUserByUsername(username) {
  return await User.findOne({ username: new RegExp(`^${username}$`, "i") });
}

module.exports = {
  register,
  login,
  getUserById,
};
