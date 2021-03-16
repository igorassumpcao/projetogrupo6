var express = require("express");
var router = express.Router();
var model = require("../models/auth");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("login");
});

router.post("/", function(req, res){
  const credentials = req.body
  const user = model.authenticateUser(credentials.login, credentials.password);
  if(user === undefined){
    res.render("login", {
      invalidCredentials: true
    });
  }
  res.redirect("products");
  //*res.send('olá')
})


module.exports = router;