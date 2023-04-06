const { response } = require("mongoose");
const Product = require("../model/product");
const product = require("../model/product");

const findAllProduct = async (req, res, next) => {
  try {
    const product = new Product.find();
    return res.json(200).json({
      status: 200,
      data: product,
      message: "Success",
    });
  } catch (error) {
    return req.status(500).json({
      status: 500,
      message: "Error Internal Server",
    });
  }
};
const findByIdProduct = async (req, res, next) => {};
const createProduct = async (req, res, next) => {};
const updateProduct = async (req, res, next) => {};
const deleteProduct = async (req, res, next) => {};

module.exports = {
  findAllProduct,
  findByIdProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
