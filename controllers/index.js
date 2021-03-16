function get (req, res, next) {
    res.render("index", { title: "Pet Shop do Grupo 06" });
  };

  function post(req, res){
    res.redirect("login")
  };



  module.exports = {
      get: get,
      post: post
  }