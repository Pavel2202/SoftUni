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

function postViewModel(post) {
  return {
    _id: post._id,
    title: post.title,
    keyword: post.keyword,
    location: post.location,
    date: post.date,
    image: post.image,
    description: post.description,
    author: authorViewModel(post.author),
    votes: post.votes.map(votesViewModel),
    rating: post.rating,
  };
}

function authorViewModel(user) {
  return {
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
  };
}

function votesViewModel(vote) {
  return {
    _id: vote._id,
    email: vote.email,
  };
}

module.exports = {
  mapErrors,
  postViewModel,
};
