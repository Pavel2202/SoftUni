const Post = require("../models/Post");

async function createPost(post) {
  const result = new Post(post);
  await result.save();

  return result;
}

async function getPosts() {
  return await Post.find({});
}

async function getPostById(id) {
  return await Post.findById(id)
    .populate("author", "firstName lastName")
    .populate("votes", "email");
}

async function updatePost(id, post) {
  const existing = await getPostById(id);

  existing.title = post.title;
  existing.keyword = post.keyword;
  existing.location = post.location;
  existing.date = post.date;
  existing.image = post.image;
  existing.description = post.description;

  await existing.save();
  return existing;
}

async function deletePost(id) {
  return await Post.findByIdAndDelete(id);
}

async function vote(postId, userId, value) {
  const post = await getPostById(postId);

  if (post.votes.includes(userId)) {
    throw new Error("User has already voted.");
  }

  post.votes.push(userId);
  post.rating += value;
  await post.save();

  return post;
}

async function getPostsByUser(userId) {
  return await Post.find({ author: userId });
}

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
  vote,
  getPostsByUser,
};
