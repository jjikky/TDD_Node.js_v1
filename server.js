const express = require("express");

const port = 5000;

const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
const productRoutes = require("./routes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/products", productRoutes);

app.use(express.json());

app.listen(port);

console.log(`App running on http://localhost:${port}`);
