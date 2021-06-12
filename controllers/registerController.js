const registerModel = require("../models/register")


const bcrypt = require("bcrypt");

function get(req, res){
    res.render ("register", {userExist: false})
};

async function post(req, res){
    const {email, password} = req.body
    const user = await registerModel.registerGet(email);
    console.log('retorno do user', user)

    if (user){
        res.render('register', {userExist: true})
    }else{
        const encryptPassword = bcrypt.hashSync(password, 12);

        registerModel.insertLogin({email, password: encryptPassword});
        
        res.redirect('products');
    }

    
}

module.exports = {
    get: get,
    post: post
}