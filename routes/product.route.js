const { Router } = require("express");

const {
  findAllProduct,
  findByIdProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const { validateProduct } = require("../validate/product.validate");

const router = Router();

router.get("/", findAllProduct);
router.get("/:id", findByIdProduct);
router.post("/", validateProduct, createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
