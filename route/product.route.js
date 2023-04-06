const { Router } = require("express");

const {
  findAllProduct,
  findByIdProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product.controller");
const {va} = require("../validate/product.validate");
