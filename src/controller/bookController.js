import {
  createBookService,
  deleteBookService,
  readBookService,
  readSpecificBookService,
  updateBookService,
} from "../service/bookService.js";

export let createBook = async (req, res, next) => {
  try {
    let result = await createBookService(req.body);
    res.status(201).json({
      success: true,
      message: "New Book added successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readBook = async (req, res, next) => {
  try {
    let result = await readBookService();
    res.status(200).json({
      success: true,
      message: "These are the lists of Books:",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificBook = async (req, res, next) => {
  try {
    let result = await readSpecificBookService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Book Found",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateBook = async (req, res, next) => {
  try {
    let result = await updateBookService(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "Book updated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteBook = async (req, res, next) => {
  try {
    let result = await deleteBookService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
