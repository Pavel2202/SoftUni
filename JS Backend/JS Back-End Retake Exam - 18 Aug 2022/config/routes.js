const homeController = require("../controllers/home");
const authController = require("../controllers/auth");
const bookController = require("../controllers/book");
const errorController = require("../controllers/error");

module.exports = (app) => {
  app.use(homeController);
  app.use(authController);
  app.use(bookController);
  app.use(errorController);
};
