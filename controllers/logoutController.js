const logoutController = {
  logout: (req, res) => {
    req.session.destroy();
    res.redirect("index");
  },
};

module.exports = logoutController;
