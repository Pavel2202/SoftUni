const Publication = require("../models/Publication");

async function getPublications() {
  return await Publication.find({});
}

async function getPublicationById(id) {
  return await Publication.findById(id);
}

async function create(publication) {
  const result = Publication(publication);
  await result.save();

  return result;
}

async function editPublication(id, publication) {
  const existing = await getPublicationById(id);

  existing.title = publication.title;
  existing.paintingTechnique = publication.paintingTechnique;
  existing.artPicture = publication.artPicture;
  existing.certificateOfAuthenticity = publication.certificateOfAuthenticity;

  await existing.save();
  return existing;
}

async function deletePublication(id) {
  return await Publication.findByIdAndDelete(id);
}

async function sharePublication(publicationId, userId) {
  const publication = await getPublicationById(publicationId);

  if (publication.usersShared.includes(userId)) {
    throw new Error("User already shared this publication.");
  }

  publication.usersShared.push(userId);
  await publication.save();

  return publication;
}

async function getUsersPublications(userId) {
  return await Publication.find({ author: userId });
}

async function getUsersSharedPublications(userId) {
  return await Publication.find({ usersShared: userId });
}

module.exports = {
  getPublications,
  getPublicationById,
  create,
  editPublication,
  deletePublication,
  sharePublication,
  getUsersPublications,
  getUsersSharedPublications,
};
