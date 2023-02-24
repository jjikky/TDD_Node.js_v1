const router = require("express").Router();
const productContoller = require("./controller/products");
router.get("/", productContoller.hello);

module.exports = router;
