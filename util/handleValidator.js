const { validationResult } = require('express-validator');

const validationResults = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();

  } catch (error) {

    res.status(403);
    res.send({
      errors: error.array(),
    });

    console.log(error.mapped());
    
  }
};

module.exports = validationResults;
