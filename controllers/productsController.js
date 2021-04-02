const middleware = require("../middlewares/login");

const productsController = {
  products: [
    {
      id: 1,
      name: "Ração Premium",
      price: 100,
      type: "alimentacao",
    },
    {
      id: 2,
      name: "Bola",
      price: 4,
      type: "brinquedos",
    },
  ],

  types: [
    {
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
    },
  ],

  get: (req, res) => {
    res.render("products", {
      types: productsController.types,
      products: productsController.products,
    });
  },

  post:
    (middleware.auth,
    (req, res, next) => {
      const newProduct = req.body;
      newProduct.id = parseInt(Math.random() * 1000000);
      productsController.products.push(newProduct);
      res.render("products", {
        types: productsController.types,
        products: productsController.products,
      });
    }),

  delete:
    ("/:id",
    middleware.auth,
    function (req, res) {
      productsController.products = productsController.products.filter(
        function (product) {
          return product.id !== parseInt(req.params.id);
        }
      );

      res.render("products", {
        types: productsController.types,
        products: productsController.products,
      });
    }),
};

module.exports = productsController;
