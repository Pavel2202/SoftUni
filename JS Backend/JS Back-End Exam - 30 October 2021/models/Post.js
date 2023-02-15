const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const DATE_PATTERN = /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/;
const URL_PATTERN = /^https?:\/\/(.+)$/;

const postSchema = new Schema({
  title: {
    type: String,
    minlength: [6, "Title must be at least 6 characters long."],
  },
  keyword: {
    type: String,
    minlength: [6, "Keyword must be at least 6 characters long."],
  },
  location: {
    type: String,
    maxlength: [15, "Location must be maximum 15 characters long."],
  },
  date: {
    type: String,
    minlength: [10, "Date must be 10 characters long."],
    maxlength: [10, "Date must be 10 characters long."],
    validate: {
      validator(value) {
        return DATE_PATTERN.test(value);
      },
      message: "Date must be in valid format.",
    },
  },
  image: {
    type: String,
    validate: {
      validator(value) {
        return URL_PATTERN.test(value);
      },
      message: "Image must be a valid URL.",
    },
  },
  description: {
    type: String,
    minlength: [8, "Description must be at least 8 characters long."],
  },
  author: { type: ObjectId, ref: "User", required: true },
  votes: { type: [ObjectId], ref: "User", default: [] },
  rating: { type: Number, default: 0 },
});

const Post = model("Post", postSchema);

module.exports = Post;
