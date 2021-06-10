const model = require("../models/auth");
const bcrypt = require("bcrypt");

const loginController = {
  get: (req, res) => {
    const message = req.query.errorMessage;
    res.render("login", { message: message });
  },

  post: async (req, res) =>{
    const {email, password} = req.body
    const user = await model.authenticateUser(email)

    if (!user){
      res.render('register')
    } 
    const comparePassword = bcrypt.compareSync(password, user.password);
    
    if (!comparePassword) {
      res.render("login");
    } else {
      //INSERIR informações de session
        req.session.user = {
        userid: user.id,
        email: user.email,
    }

    res.redirect("products");
  
}
}
}

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
