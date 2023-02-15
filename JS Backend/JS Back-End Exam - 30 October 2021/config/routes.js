const homeController = require("../controllers/home");
const authController = require("../controllers/auth");
const postController = require("../controllers/post");
const errorController = require("../controllers/error");

module.exports = (app) => {
  app.use(homeController);
  app.use(postController);
  app.use(authController);
  app.use(errorController);
};
