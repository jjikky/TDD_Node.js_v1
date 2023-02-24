const productModel = require("../models/Product");

exports.hello = (req, res) => {
  res.json({ message: "Welcome to the API" });
};

exports.createProduct = (req, res, next) => {
  const createdProduct = productModel.create(req.body);
  res.status(201).json(createdProduct);
};
