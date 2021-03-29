var express = require("express");
const { route } = require(".");
var router = express.Router();
var middleware = require("../middlewares/login")

var products = [{
    id: 1,
    name: 'Ração Premium',
    price: 100,
    type: 'alimentacao',
},{
    id: 2,
    name: 'Bola',
    price: 4,
    type: 'brinquedos',
}]

const types = [{
    id: "alimentacao",
    label: "Alimentação",
},
{
    id: "brinquedos",
    label: "Brinquedos",
},
{
    id: "higiene",
    label: "Higiene",
}];

router.get("/", function(req, res){
    res.render("products", {types:types, products:products});
});

router.post("/", middleware.auth, function(req, res, next){
    const newProduct = req.body;
    newProduct.id = parseInt(Math.random()*1000000);
    products.push(newProduct);
    res.render('products', {types:types, products:products})
});

router.delete('/:id', function(req, res) {
    products = products.filter(function(product) {
        return product.id !== parseInt(req.params.id);
    })

    res.render('products', {types:types, products: products})
});

module.exports = router;