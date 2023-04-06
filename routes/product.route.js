const { Router } = require("express");
const fileUpload = require("express-fileupload");
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
router.post(
  "/",
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads/",
  }),
  validateProduct,
  createProduct
);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
