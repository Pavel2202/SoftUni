const { register, login } = require("../services/user");
const { mapErrors } = require("../util/mapper");
const { isUser, isGuest } = require("../middlewares/guards");

const router = require("express").Router();

router.get("/register", isGuest(), (req, res) => {
  res.render("register", { title: "Register Page" });
});

router.post("/register", isGuest(), async (req, res) => {
  try {
    if (req.body.password.trim().length < 3) {
      throw new Error("Password must be at least 3 characters long.");
    } else if (req.body.password != req.body.confirmPassword) {
      throw new Error("Passwords don't match.");
    }
    const user = await register(
      req.body.username,
      req.body.password,
      req.body.address
    );
    req.session.user = user;
    res.redirect("/");
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    res.render("register", {
      title: "Register Page",
      data: {
        username: req.body.username,
        address: req.body.address,
      },
      errors,
    });
  }
});

router.get("/login", isGuest(), (req, res) => {
  res.render("login", { title: "Login Page" });
});

router.post("/login", isGuest(), async (req, res) => {
  try {
    const user = await login(req.body.username, req.body.password);
    req.session.user = user;
    res.redirect("/");
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    res.render("login", {
      title: "Login Page",
      data: { username: req.body.username },
      errors,
    });
  }
});

router.get("/logout", isUser(), (req, res) => {
  delete req.session.user;
  res.redirect("/");
});

module.exports = router;
