import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  readProduct,
  readSpecificProduct,
  updateProduct,
} from "../controller/productController.js";
import validation, {
  productValidation,
} from "../validation/productValidation.js";

// check if he is customer or admin

// let check = (role) => {
//   return (req, res, next) => {
//     if (role === "admin") {
//       next();
//     } else if (role === "customer") {
//       res.status(400).json({
//         success: true,
//         message: "You are not allowed to create a product",
//       });
//     }
//   };
// };

//  check for age greater than 18 and status is married

// let checkAgeAndMarriedStatus = (age, isMarried) => {
//   return (req, res, next) => {
//     if (age > 18 && isMarried) next();
//     else {
//       res.status(400).json({
//         success: false,
//         message: "Sorry, You are not qualified to add a product",
//       });
//     }
//   };
// };

// let checkAge = (age) => {
//   return (req, res, next) => {
//     if (age > 18) return next();
//     else {
//       res.status(400).json({
//         success: false,
//         message: "Your do not have qualified age to input product",
//       });
//     }
//   };
// };

let productRouter = Router();

// productRouter
//   .route("/")
// .post(checkAgeAndMarriedStatus(20, true), createProduct);
// .post(checkAge(17), createProduct)
// .post(createProduct)

// productRouter.route("/").post(check(), createProduct).get(readProduct);

// ***************************************for specific data ********************************

productRouter
  .route("/:id")
  .get(readSpecificProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

// ******************************* Learning Joi Validation ******************************************************
// install => npm i joi

// let productValidation = Joi.object()
//   .keys({
//     name: Joi.string().required().min(3), //it should have min of 3 letters
//     price: Joi.number()
//       .required()
//       .custom((value, msg) => {
//         if (value >= 5000) return true;
//         else return msg.message("Price is less than 5000!!");
//       }),
//     quantity: Joi.number(),
//   })
//   .unknown(false);

productRouter
  .route("/")
  .post(validation(productValidation), createProduct)
  .get(readProduct);

export default productRouter;
