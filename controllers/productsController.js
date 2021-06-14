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
      image:
        "https://assetcdn.buhlergroup.com/rendition/874601345621/ab5fbfba5dc54202983d10bfb6473098/-TwebHeader_16x9",
    },
    {
      id: "brinquedos",
      label: "Brinquedos",
      image:
        "https://a-static.mlcdn.com.br/1500x1500/mordedor-brinquedos-para-cachorro-kit-vinil-pet-caes-pet-toys/yellowimport/1019p/f8d8811758ff7856667f4f0fa8d15d52.jpg",
    },
    {
      id: "higiene",
      label: "Higiene",
      image:
        "http://blog.boticapets.com.br/wp-content/uploads/2018/03/dog-taking-a-bath-PLAUJAC-1170x600.jpg",
    },
    {
      id: "outro",
      label: "Outro",
      image:
        "https://static.riachuelo.com.br/RCHLO/13900366001/portrait/07b4fc3983f953c4774c0258eaad3c259a6c65e8.jpg?imwidth=700",
    },
  ],

  get: async (req, res) => {
    const productsData = await productsModel.getProducts();
    const types = productsController.types;
    res.render("products", { products: productsData, types: types });
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
  },
};

module.exports = productsController;
