const Book = require("../models/Book");
const User = require("../models/User");

async function getBooks() {
  return await Book.find({});
}

async function getBookById(id) {
  return await Book.findById(id).populate("wishingList", "_id");
}

async function createBook(book) {
  const result = new Book(book);
  await result.save();

  return result;
}

async function updateBook(id, book) {
  const existing = await getBookById(id);

  existing.title = book.title;
  existing.author = book.author;
  existing.image = book.image;
  existing.bookReview = book.bookReview;
  existing.genre = book.genre;
  existing.stars = book.stars;

  await existing.save();
  return existing;
}

async function deleteBook(book) {
  return await Book.deleteOne(book);
}

async function wishBook(id, userId) {
  const book = await getBookById(id);

  if (book.wishingList.some((x) => x._id == userId)) {
    throw new Error("User already wished this book.");
  }

  book.wishingList.push(userId);

  await book.save();
  return book;
}

async function getUserWishedBooks(userId) {
  return await Book.find({ wishingList: userId });
}

async function getUser(userId) {
  return await User.findById(userId);
}

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  wishBook,
  getUserWishedBooks,
  getUser,
};
