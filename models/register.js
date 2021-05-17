const Sequelize = require("sequelize");
const config = require("../config/database");
const db = new Sequelize(config);

async function insertLogin(login){
    await db.query("insert into login (email, password) values (:email, :password)", {
        replacements: {
            email: login.email,
            password: login.password
        }
    })
}

module.exports = {
    insertLogin: insertLogin
}