const product = require("../models/product");
const Product = require("../models/product");
const { uploadImage, deleteImage } = require("../utils/cloudinary");
const fs = require("fs-extra");

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
    const { name, description, code, price, category, stock } = req.body;

    const product = new Product({
      name,
      description,
      code,
      price,
      category,
      stock,
    });

    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      console.log(result);

      product.image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };

      await fs.unlink(req.files.image.tempFilePath);
    }

    await product.save();

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
      _id: id,
    });

    if (!product)
      return res.status(404).json({
        message: "Producto no existe",
      });

    if (product.image.public_id) {
      await deleteImage(product.image.public_id);
    }

    return res.json(product);
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
