const { userViewModel, usersPublicationsViewModel } = require("../util/mapper");
const { getUserById } = require("../services/user");
const {
  getUsersPublications,
  getUsersSharedPublications,
} = require("../services/publication");

const router = require("express").Router();

router.get("/profile", async (req, res) => {
  const userId = req.session.user._id;
  const user = userViewModel(await getUserById(userId));
  const sharedPublications = await getUsersSharedPublications(userId);
  const ownPublications = await getUsersPublications(userId);

  user.sharedPublications = sharedPublications.map(usersPublicationsViewModel);
  user.ownPublications = ownPublications.map(usersPublicationsViewModel);

  res.render("profile", { title: "Profile Page", user });
});

module.exports = router;
