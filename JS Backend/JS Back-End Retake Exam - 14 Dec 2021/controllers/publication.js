const { mapErrors, publicationViewModel } = require("../util/mapper");
const { isUser } = require("../middlewares/guards");
const {
  getPublications,
  getPublicationById,
  create,
  editPublication,
  deletePublication,
  sharePublication,
} = require("../services/publication");

const router = require("express").Router();

router.get("/gallery", async (req, res) => {
  const publications = await (
    await getPublications()
  ).map(publicationViewModel);
  res.render("gallery", { title: "Gallery", publications });
});

router.get("/details/:id", async (req, res) => {
  const publication = publicationViewModel(
    await getPublicationById(req.params.id)
  );

  if (req.session.user) {
    publication.hasUser = true;
    if (req.session.user._id == publication.author) {
      publication.isAuthor = true;
    } else {
      publication.isShared = publication.usersShared.includes(
        req.session.user._id
      );
    }
  }
  res.render("details", { title: publication.title, publication });
});

router.get("/create", isUser(), (req, res) => {
  res.render("create", { title: "Create Publication" });
});

router.post("/create", isUser(), async (req, res) => {
  const userId = req.session.user._id;
  const publication = {
    title: req.body.title,
    paintingTechnique: req.body.paintingTechnique,
    artPicture: req.body.artPicture,
    certificateOfAuthenticity: req.body.certificateOfAuthenticity,
    author: userId,
  };

  try {
    await create(publication);
    res.redirect("/gallery");
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    res.render("create", {
      title: "Create Publication",
      data: publication,
      errors,
    });
  }
});

router.get("/edit/:id", isUser(), async (req, res) => {
  const publication = publicationViewModel(
    await getPublicationById(req.params.id)
  );

  if (req.session.user._id != publication.author) {
    res.redirect("/details/" + req.params.id);
  }

  res.render("edit", { title: "Edit Publication", publication });
});

router.post("/edit/:id", isUser(), async (req, res) => {
  const id = req.params.id;
  const existing = publicationViewModel(await getPublicationById(id));

  if (req.session.user._id != existing.author) {
    res.redirect("/details/" + id);
  }

  const publication = {
    title: req.body.title,
    paintingTechnique: req.body.paintingTechnique,
    artPicture: req.body.artPicture,
    certificateOfAuthenticity: req.body.certificateOfAuthenticity,
  };

  try {
    await editPublication(id, publication);
    res.redirect("/details/" + id);
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    publication._id = id;
    res.render("edit", {
      title: "Edit Publication",
      publication,
      errors,
    });
  }
});

router.get("/delete/:id", isUser(), async (req, res) => {
  const id = req.params.id;
  const publication = publicationViewModel(await getPublicationById(id));

  if (req.session.user._id != publication.author._id) {
    res.redirect("/details/" + id);
  }

  try {
    await deletePublication(id);
    res.redirect("/gallery");
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    publication._id = id;
    res.render("details/" + id, { title: publication.title, errors });
  }
});

router.get("/share/:id", isUser(), async (req, res) => {
  const id = req.params.id;
  const publication = publicationViewModel(await getPublicationById(id));

  if (publication.author == req.session.user._id) {
    res.redirect("/details/" + id);
  }

  try {
    await sharePublication(id, req.session.user._id);
    res.redirect("/gallery");
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    res.render("details", { title: publication.title, errors, publication });
  }
});

module.exports = router;
