const { check } = require("express-validator");
const validationResults = require("../utils/handleValidator");

const validateProduct = [
  check("name")
    .exists()
    .notEmpty()
    .isLength({ min: 5, max: 100 })
    .withMessage("Please don't forget a title"),

  check("description")
    .exists()
    .notEmpty()
    .isLength({ min: 5, max: 500 })
    .withMessage("Please don't forget a description"),

  check("code")
    .exists()
    .notEmpty()
    .isLength({ min: 5, max: 50 })
    .withMessage("Please don't forget a code"),

  check("price")
    .exists()
    .notEmpty()
    .isLength({ min: 1, max: 50 })
    .withMessage("Please don't forget a price"),

  check("category")
    .exists()
    .notEmpty()
    .isLength({ min: 1, max: 50 })
    .withMessage("Please don't forget a category"),

  check("stock")
    .exists()
    .notEmpty()
    .isLength({ min: 0, max: 50 })
    .withMessage("Please don't forget a stock"),

  (req, res, next) => {
    return validationResults(req, res, next);
  },
];

module.exports = {
  validateProduct,
};
