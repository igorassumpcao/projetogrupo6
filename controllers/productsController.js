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

  get: (req, res) => {
    res.render("products", {
      types: productsController.types,
      products: productsController.products,
    });
  },

  post: (req, res, next) => {
    const newProduct = req.body;
    newProduct.id = parseInt(Math.random() * 1000000);
    productsController.products.push(newProduct);
    res.render("products", {
      types: productsController.types,
      products: productsController.products,
    });
  },

  delete: (req, res) => {
    productsController.products = productsController.products.filter(function (
      product
    ) {
      return product.id !== parseInt(req.params.id);
    });

    res.render("products", {
      types: productsController.types,
      products: productsController.products,
    });
  },
};

module.exports = productsController;