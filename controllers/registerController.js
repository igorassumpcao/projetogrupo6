const registerModel = require("../models/register")


const bcrypt = require("bcrypt");

function get(req, res){
    res.render ("register")
};

async function post(req, res){
    const {email, password} = req.body
    const user = await registerModel.registerGet(email);

    if (user){
        res.render('register')
    }

    const encryptPassword = bcrypt.hashSync(password, 12);

    registerModel.insertLogin({email, password: encryptPassword});
    
    res.render('login');
}

module.exports = {
    get: get,
    post: post
}