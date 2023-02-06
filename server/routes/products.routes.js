const ProductsControllers = require("../controllers/products.controllers")

module.exports = app => {
    app.post("/api/products/new", ProductsControllers.createProducts);
    app.get("/api/products/all", ProductsControllers.allProducts);
    app.get("/api/products/view/:id", ProductsControllers.oneProducts);
}