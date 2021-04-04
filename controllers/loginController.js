const model = require("../models/auth");

const loginController = {
  get: (req, res) => {
    const message = req.query.errorMessage;
    res.render("login", { message: message });
  },

  post: (req, res) => {
    const credentials = req.body;
    const user = model.authenticateUser(
      credentials.login,
      credentials.password
    );
    if (user === undefined) {
      res.render("login", {
        invalidCredentials: true,
      });
    } else {
      req.session.user = user;
      res.redirect("products");
    }
  },
};

module.exports = loginController;
