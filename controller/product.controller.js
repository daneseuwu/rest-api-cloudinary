const { response } = require("mongoose");
const Product = require("../model/product");

const findAllProduct = async (req, res, next) => {
  try {
    const product = await Product.find();

    return res.status(200).json({
      status: 200,
      data: product,
      message: "Success",
    });

  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error Internal Server",
    });
  }
};
const findByIdProduct = async (req, res, next) => {};

const createProduct = async (req, res, next) => {
  try {
    const product = req.body;
    const data = new Product(product);
    data.save();

    return res.status(200).json({
      status: 200,
      message: "Registration successful",
    });
  } catch (error) {
    return res.status(200).json({
      status: 200,
      message: "Registration Error",
    });
  }
};

const updateProduct = async (req, res, next) => {};
const deleteProduct = async (req, res, next) => {};

module.exports = {
  findAllProduct,
  findByIdProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
