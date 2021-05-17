const Sequelize = require("sequelize");
const config = require("../config/database");
const db = new Sequelize(config);
const productsModel = require("../models/products");

const productsController = {
  products: [
    {
      id: 1,
      name: "Ração Premium",
      price: 100,
      type: "alimentação",
      descricao: "descricao",
    },
    {
      id: 2,
      name: "Bola",
      price: 4,
      type: "brinquedos",
      descricao: "descricao",
    },
  ],

  types: [
    {
      id: "alimentação",
      label: "Alimentação",
    },
    {
      id: "brinquedos",
      label: "Brinquedos",
    },
    {
      id: "higiene",
      label: "Higiene",
    },
  ],


  get: async (req, res) => {
    const productsData = await productsModel.getProducts();
    const types = productsController.types;
    res.render("products", { products: productsData, types: types  });
  },


 edit: async (req, res) => {
    const productId = req.params.id;
    const product = await productsModel.getProductById(productId);
    const types = productsController.types;
    res.render("products/edit", { product: product, types: types });
  },
  
  post: async (req, res, next) => {
    const product = req.body;
    await productsModel.insertProduct(product);
    res.redirect("/products");
  },


  delete: async (req, res) => {
    const productId = req.params.id;
    await productsModel.removeProduct(productId);
    res.redirect("/products");
  },

  put: async (req, res) => {
    const product = req.body;
    await productsModel.updateProduct(product);
    res.redirect("/products");
}
}


module.exports = productsController;
