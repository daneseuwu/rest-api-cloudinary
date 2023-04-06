const { check } = require("express-validator");
const validationResults = require("../util/handleValidator");

const validateProduct = [
  check("name")
    .exists()
    .notEmpty()
    .isLength({ min: 5, max: 20 })
    .withMessage("Please don't forget a title"),

  check("description")
    .exists()
    .notEmpty()
    .isLength({ min: 5, max: 50 })
    .withMessage("Please don't forget a description"),

  check("code")
    .exists()
    .notEmpty()
    .isLength({ min: 5, max: 50 })
    .withMessage("Please don't forget a code"),

  check("price")
    .exists()
    .notEmpty()
    .isLength({ min: 5, max: 50 })
    .withMessage("Please don't forget a price"),

  check("category")
    .exists()
    .notEmpty()
    .isLength({ min: 5, max: 50 })
    .withMessage("Please don't forget a category"),

  check("shoes")
    .exists()
    .notEmpty()
    .isLength({ min: 4, max: 50 })
    .withMessage("Please don't forget a shoes tag"),

  check("tshirt")
    .exists()
    .notEmpty()
    .isLength({ min: 4, max: 50 })
    .withMessage("Please don't forget a tshirt tag"),

  check("smartwatch")
    .exists()
    .notEmpty()
    .isLength({ min: 4, max: 50 })
    .withMessage("Please don't forget a smartwatch tag"),

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
