const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const URL_PATTERN = /^https?:\/\/(.+)$/;

const bookSchema = new Schema({
  title: {
    type: String,
    required: [true, "Book title is required."],
    minLength: [2, "Book title must be at least 2 characters long."],
  },
  author: {
    type: String,
    required: [true, "Book author is required."],
    minLength: [5, "Book author must be at least 5 characters long."],
  },
  image: {
    type: String,
    required: [true, "Book image is required."],
    validate: {
      validator(value) {
        return URL_PATTERN.test(value);
      },
      message: "Image must be a valid URL.",
    },
  },
  bookReview: {
    type: String,
    required: [true, "Book review is required."],
    minLength: [10, "Book review must be at least 10 characters long."],
  },
  genre: {
    type: String,
    required: [true, "Book genre is required."],
    minLength: [3, "Book genre must be at least 3 characters long."],
  },
  stars: {
    type: Number,
    required: [true, "Book stars is required."],
    range: [1, 5],
  },
  wishingList: {
    type: [ObjectId],
    ref: "User",
    default: [],
  },
  owner: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
});

const Book = model("Book", bookSchema);

module.exports = Book;
