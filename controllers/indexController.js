const indexController = {
  get: (req, res) => {
    res.render("index");
  },

  post: (req, res) => {
    res.redirect("login");
  },
};

module.exports = indexController;
