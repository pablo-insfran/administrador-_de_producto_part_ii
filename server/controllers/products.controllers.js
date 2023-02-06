const Products = require("../models/products.models")

module.exports.createProducts = (req, res) => {
    Products.create(req.body)
        .then(newProducts => res.json({ result: newProducts }))
        .catch(error => res.json({ message: "Algo salió mal", error: error }))
};

module.exports.allProducts = (req, res) => {
    Products.find()
        .then(allProducts => res.json({ result: allProducts }))
        .catch(error => res.json({ message: "Algo salió mal", error: error }))
};

module.exports.oneProducts = (req, res) => {
    Products.findById(req.params.id)
        .then(products => res.json({ result: products }))
        .catch(error => res.json({ message: "Algo salió mal", error: error }))
};