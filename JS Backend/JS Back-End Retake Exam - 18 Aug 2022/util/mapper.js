function mapErrors(error) {
  if (Array.isArray(error)) {
    return error;
  } else if (error.name == "ValidationError") {
    return Object.values(error.errors).map((e) => ({ msg: e.message }));
  } else if (typeof error.message == "string") {
    return [{ msg: error.message }];
  } else {
    return [{ msg: "Request error" }];
  }
}

function bookViewModel(book) {
  return {
    _id: book._id,
    title: book.title,
    author: book.author,
    image: book.image,
    bookReview: book.bookReview,
    genre: book.genre,
    stars: book.stars,
    owner: book.owner,
    wishingList: book.wishingList.map(wishesViewModel),
  };
}

function wishesViewModel(wish) {
  return {
    _id: wish._id,
  };
}

module.exports = {
  mapErrors,
  bookViewModel,
};
