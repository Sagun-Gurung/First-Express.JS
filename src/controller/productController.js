import {
  createProductService,
  deleteProductService,
  readProductService,
  readSpecificProductService,
  updateProductService,
} from "../service/productService.js";

export let createProduct = async (req, res, next) => {
  try {
    let result = await createProductService(req.body);

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Product couldn't be added",
      message: error.message,
    });
  }
};

export let readProduct = async (req, res, next) => {
  try {
    let result = await readProductService();
    res.status(200).json({
      success: true,
      message: "Product Database Read Successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export let readSpecificProduct = async (req, res, next) => {
  try {
    let result = await readSpecificProductService(req.params.id);
    res.status(200).json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateProduct = async (req, res, next) => {
  try {
    let result = await updateProductService(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "Products updated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteProduct = async (req, res, next) => {
  try {
    // let result = await Student.findByIdAndDelete(req.params.id);
    let result = await deleteProductService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Students deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
