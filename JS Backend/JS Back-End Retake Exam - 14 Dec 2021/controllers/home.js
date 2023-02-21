const { publicationViewModel } = require("../util/mapper");
const { getPublications } = require("../services/publication");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const publications = await (
    await getPublications()
  ).map(publicationViewModel);
  res.render("home", { title: "Home Page", publications });
});

module.exports = router;
