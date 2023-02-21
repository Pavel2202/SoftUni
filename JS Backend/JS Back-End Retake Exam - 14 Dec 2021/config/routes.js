const homeController = require("../controllers/home");
const authController = require("../controllers/auth");
const userController = require("../controllers/user");
const publicationController = require("../controllers/publication");

module.exports = (app) => {
  app.use(homeController);
  app.use(authController);
  app.use(userController);
  app.use(publicationController);
};
