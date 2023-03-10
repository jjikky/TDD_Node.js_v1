const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: Number,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
