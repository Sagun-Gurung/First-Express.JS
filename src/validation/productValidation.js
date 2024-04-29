// ******************************* Learning Joi Validation ******************************************************
// install => npm i joi

import Joi from "joi";

let validation = (productValidation) => {
  return (req, res, next) => {
    let data = productValidation.validate(req.body);
    let error = data.error;

    if (error) {
      // console.log("Error!!!");
      res.status(400).json({
        success: false,
        // message: error,
        message: error.details[0].message,
      });
    } else next();
  };
};

export let productValidation = Joi.object()
  .keys({
    name: Joi.string().required().min(2).allow(""), //it should have min of 3 letters
    price: Joi.number().required(),
    // .custom((value, msg) => {
    //   if (value >= 5000) return true;
    //   else return msg.message("Price is less than 5000!!");
    // }),
    quantity: Joi.number(),
  })
  .unknown(false);

export default validation;
