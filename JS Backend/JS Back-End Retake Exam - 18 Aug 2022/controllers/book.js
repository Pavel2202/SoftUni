const router = require("express").Router();
const { isUser } = require("../middleware/guards");
const {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
  wishBook,
  getUserWishedBooks,
  getUser,
} = require("../services/book");
const { mapErrors, bookViewModel } = require("../util/mapper");

router.get("/catalog", async (req, res) => {
  const books = (await getBooks()).map(bookViewModel);
  res.render("catalog", { title: "Catalog", books });
});

router.get("/details/:id", async (req, res) => {
  const userId = req.session.user._id;
  const book = bookViewModel(await getBookById(req.params.id));

  if (req.session.user) {
    book.hasUser = true;
    if (userId == book.owner._id) {
      book.isAuthor = true;
    } else {
      book.hasWished = book.wishingList.some((x) => x._id == userId);
    }
  }

  res.render("details", { title: book.title, book });
});

router.get("/create", isUser(), (req, res) => {
  res.render("create", { title: "Create Book" });
});

router.post("/create", isUser(), async (req, res) => {
  const userId = req.session.user._id;
  const book = {
    title: req.body.title,
    author: req.body.author,
    image: req.body.image,
    bookReview: req.body.bookReview,
    genre: req.body.genre,
    stars: req.body.stars,
    owner: userId,
  };

  try {
    await createBook(book);
    res.redirect("/catalog");
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    res.render("create", { title: "Create Book", data: book, errors });
  }
});

router.get("/edit/:id", isUser(), async (req, res) => {
  const book = bookViewModel(await getBookById(req.params.id));

  if (book.owner._id != req.session.user._id) {
    res.redirect("/details/" + req.params.id);
  }

  res.render("edit", { title: "Edit Book", book });
});

router.post("/edit/:id", isUser(), async (req, res) => {
  const existing = bookViewModel(await getBookById(req.params.id));

  if (existing.owner._id != req.session.user._id) {
    res.redirect("/details/" + req.params.id);
  }

  const book = {
    title: req.body.title,
    author: req.body.author,
    image: req.body.image,
    bookReview: req.body.bookReview,
    genre: req.body.genre,
    stars: req.body.stars,
  };

  try {
    await updateBook(existing._id, book);
    res.redirect("/details/" + existing._id);
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    res.render("edit", { title: "Edit Book", book, errors });
  }
});

router.get("/delete/:id", isUser(), async (req, res) => {
  const existing = bookViewModel(await getBookById(req.params.id));

  if (existing.owner._id != req.session.user._id) {
    res.redirect("/details/" + req.params.id);
  }

  try {
    await deleteBook(existing);
    res.redirect("/catalog");
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    res.render("details/" + existing._id, { title: existing.title, errors });
  }
});

router.get("/wish/:id", isUser(), async (req, res) => {
  const existing = bookViewModel(await getBookById(req.params.id));

  if (existing.owner._id == req.session.user._id) {
    res.redirect("/details/" + req.params.id);
  }

  try {
    await wishBook(existing._id, req.session.user._id);
    res.redirect("/details/" + req.params.id);
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    res.render("details", { title: existing.title, errors });
  }
});

router.get("/profile", isUser(), async (req, res) => {
  const userId = req.session.user._id;
  const books = (await getUserWishedBooks(userId)).map(bookViewModel);
  const user = await getUser(userId);
  const email = user.email;

  const model = {
    email: email,
    books: books,
  };

  res.render("profile", { title: "Profile", model });
});

module.exports = router;
