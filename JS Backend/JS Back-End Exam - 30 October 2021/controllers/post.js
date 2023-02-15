const router = require("express").Router();
const { isUser } = require("../middleware/guards");
const {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
  vote,
  getPostsByUser,
} = require("../services/post");
const { mapErrors, postViewModel } = require("../util/mapper");

router.get("/posts", async (req, res) => {
  const posts = (await getPosts()).map(postViewModel);
  res.render("all-posts", { title: "Posts", posts });
});

router.get("/details/:id", async (req, res) => {
  const post = postViewModel(await getPostById(req.params.id));

  if (req.session.user) {
    post.hasUser = true;
    if (req.session.user._id == post.author._id) {
      post.isAuthor = true;
    } else {
      post.hasVoted = post.votes.includes(req.session.user._id);
    }
  }

  res.render("details", { title: post.title, post });
});

router.get("/create", isUser(), (req, res) => {
  res.render("create", { title: "Create Post" });
});

router.post("/create", isUser(), async (req, res) => {
  const userId = req.session.user._id;
  const post = {
    title: req.body.title,
    keyword: req.body.keyword,
    location: req.body.location,
    date: req.body.date,
    image: req.body.image,
    description: req.body.description,
    author: userId,
  };

  try {
    await createPost(post);
    res.redirect("/posts");
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    res.render("create", { title: "Create Post", errors, data: post });
  }
});

router.get("/edit/:id", isUser(), async (req, res) => {
  const post = postViewModel(await getPostById(req.params.id));

  if (req.session.user._id != post.author._id) {
    res.redirect("/details/" + req.params.id);
  }

  res.render("edit", { title: "Edit Post", post });
});

router.post("/edit/:id", isUser(), async (req, res) => {
  const id = req.params.id;
  const existing = postViewModel(await getPostById(id));

  if (req.session.user._id != existing.author._id) {
    res.redirect("/details/" + id);
  }

  const post = {
    title: req.body.title,
    keyword: req.body.keyword,
    location: req.body.location,
    date: req.body.date,
    image: req.body.image,
    description: req.body.description,
  };

  try {
    await updatePost(id, post);
    res.redirect("/details/" + id);
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    post._id = id;
    res.render("edit", { title: "Edit Post", errors, post });
  }
});

router.get("/delete/:id", isUser(), async (req, res) => {
  const id = req.params.id;
  const existing = postViewModel(await getPostById(id));

  if (req.session.user._id != existing.author._id) {
    res.redirect("/details/" + id);
  }

  try {
    await deletePost(id);
    res.redirect("/posts");
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    post._id = id;
    res.render("details/" + id, { title: existing.title, errors });
  }
});

router.get("/vote/:id/:type", isUser(), async (req, res) => {
  const id = req.params.id;
  const post = postViewModel(await getPostById(id));
  const value = req.params.type == "upvote" ? 1 : 1;

  try {
    await vote(id, req.session.user._id, value);
    res.redirect("/details/" + id);
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    res.render("details", { title: post.title, errors, post });
  }
});

router.get("/myPosts", isUser(), async (req, res) => {
  const posts = (await getPostsByUser(req.session.user._id)).map(postViewModel);
  console.log(posts);
  res.render("my-posts", { title: "My Posts", posts });
});

module.exports = router;
