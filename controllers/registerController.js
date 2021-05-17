const registerModel = require("../models/register")

function get(req, res){
    res.render ("register")
};

async function post(req, res){
    const register = req.body
    await registerModel.insertLogin(register);
    res.redirect("login");

}

module.exports = {
    get: get,
    post: post
}