import Product from "../models/product.schema.js";
import slugify from "slugify";
import mongoose from "mongoose";

const slugifyAllProducts = async () => {
  const products = await Product.find();

  products.forEach(async product => {
    product.slug = slugify(product.name.toLowerCase());
    await product.save();
    console.log("SAVED");
  });
};

mongoose
  .connect("mongodb://localhost:27017/shop", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => slugifyAllProducts())
  .catch(err => console.log("Failed to connect to DB!!!"));
