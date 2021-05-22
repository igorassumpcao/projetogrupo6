const { authenticateUser } = require("../models/auth");
const model = require("../models/auth");

const loginController = {
  get: (req, res) => {
    const message = req.query.errorMessage;
    res.render("login", { message: message });
  },

  post: async (req, res) =>{
    const user = await model.authenticateUser(req.body)
    console.log('user encontrado ', user);

    if(user !== undefined && user.password === req.body.password){
      req.session.user = user;
      res.redirect("products");
    } else{
      
      res.render("login", {
        invalidCredentials: true,
      });
    }
    
  }
};

  /*
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
};*/

module.exports = loginController;
