const users = [
    {
        login: "fabio@petshop.com.br",
        password: "123"
    },
    {
        login: "yamile@petshop.com.br",
        password: "123"
    },
    {
        login: "carlos@petshop.com.br",
        password: "123"
    }
];

function authenticateUser(login, password) {
    const user = users.find(function (user) {
      return user.login === login && user.password === password;
    });
  
    return user;
  }

  
  module.exports = {
    authenticateUser: authenticateUser,
  };