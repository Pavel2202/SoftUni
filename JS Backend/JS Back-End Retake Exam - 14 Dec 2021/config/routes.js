const homeController = require("../controllers/home");
const authController = require("../controllers/auth");
const userController = require("../controllers/user");
const publicationController = require("../controllers/publication");
const errorController = require("../controllers/error");

module.exports = (app) => {
  app.use(homeController);
  app.use(authController);
  app.use(userController);
  app.use(publicationController);
  app.use(errorController);
};
