const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const CERTIFICATE_PATTERN = /^(Yes|No)$/;
const ART_PICTURE_PATTERN = /^https?:\/\/(.+)$/;

const publicationSchema = new Schema({
  title: {
    type: String,
    minlength: [6, "Title must be at least 6 characters long."],
  },
  paintingTechnique: {
    type: String,
    minlength: [1, "Painting technique field must not be empty"],
    maxlength: [15, "Painting technique must not be over 15 characters long."],
  },
  artPicture: {
    type: String,
    validate: {
      validator(value) {
        return ART_PICTURE_PATTERN.test(value);
      },
      message: "Picture must be a valid url.",
    },
  },
  certificateOfAuthenticity: {
    type: String,
    validate: {
      validator(value) {
        return CERTIFICATE_PATTERN.test(value);
      },
      message: "Field value must be 'Yes' or 'No'",
    },
  },
  author: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  usersShared: {
    type: [ObjectId],
    ref: "User",
    default: [],
  },
});

const Publication = model("Publication", publicationSchema);

module.exports = Publication;
