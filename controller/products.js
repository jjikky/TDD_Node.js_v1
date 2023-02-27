const productModel = require("../models/Product");

exports.hello = (req, res) => {
  res.json({ message: "Welcome to the API" });
};

exports.createProduct = async (req, res, next) => {
  try {
    const createdProduct = await productModel.create(req.body);
    console.log(createdProduct);
    res.status(201).json(createdProduct);
  } catch (error) {
    next(error); // 비동기 에러 처리
  }
};
