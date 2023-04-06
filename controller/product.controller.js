const { response } = require("mongoose");
const Product = require("../model/product");

const findAllProduct = async (req, res, next) => {};
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
