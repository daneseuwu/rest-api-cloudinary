const { response } = require("mongoose");
const Product = require("../models/product");

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

const findByIdProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

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

const createProduct = async (req, res, next) => {
  try {

    const product = req.body;
    const data = new Product(product);

    if(req.files?.image){

      

    }

    data.save();

    return res.status(200).json({
      status: 200,
      message: "Registration successful",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error Internal Server",
    });
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = req.body;

    await Product.findByIdAndUpdate({ _id: id }, product);

    res.status(200).json({
      status: 200,
      message: "Edited successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Error Internal Server",
    });
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete({
      _id: id,
    });

    return res.status(200).json({
      status: 200,
      message: "Delete Success",
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Error Internal Server",
    });
  }
};

module.exports = {
  findAllProduct,
  findByIdProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
