var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
    res.render("resetpassword")
})

router.post('/', function(req, res){
    res.send('Email enviando')
})

module.exports = router;

