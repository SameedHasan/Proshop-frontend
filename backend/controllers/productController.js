import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @Desc Fetch all Products
// @Route GET /api/products
// @Access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @Desc Fetch single Product
// @Route GET /api/products/:id
// @Access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

// @Desc Delete Product
// @Route DELETE /api/products/:id
// @Access Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product Deleted Successfully!" });
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

// @Desc Create Product
// @Route POST /api/products
// @Access Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "sample name",
    image: "/images/sample.jpg",
    description: "sample description",
    brand: "sample brand",
    category: "sample category",
    price: 0,
    user: req.user._id,
    countInStock: 0,
    numReviews: 0,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @Desc Update Product
// @Route PUT /api/products/:id
// @Access Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.status(201).json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
};
