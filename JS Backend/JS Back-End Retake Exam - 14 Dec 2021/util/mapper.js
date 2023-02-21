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

function publicationViewModel(publication) {
  return {
    _id: publication._id,
    title: publication.title,
    paintingTechnique: publication.paintingTechnique,
    artPicture: publication.artPicture,
    certificateOfAuthenticity: publication.certificateOfAuthenticity,
    author: publication.author,
    usersShared: publication.usersShared,
  };
}

function usersPublicationsViewModel(publication) {
  return {
    _id: publication._id,
    title: publication.title,
  };
}

function userViewModel(user) {
  return {
    _id: user._id,
    username: user.username,
    address: user.address,
    sharedPublications: [],
    ownPublications: [],
  };
}

module.exports = {
  mapErrors,
  publicationViewModel,
  userViewModel,
  usersPublicationsViewModel,
};
