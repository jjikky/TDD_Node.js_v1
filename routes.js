const router = require("express").Router();
const productContoller = require("./controller/products");

router.post("/", productContoller.createProduct);

module.exports = router;
