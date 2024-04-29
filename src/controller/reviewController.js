import {
  createReviewService,
  deleteReviewService,
  readReviewService,
  readSpecificReviewService,
  updateReviewService,
} from "../service/reviewService.js";

export let createReview = async (req, res, next) => {
  try {
    let result = await createReviewService(req.body);
    res.status(201).json({
      success: true,
      message: "New Review added successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readReview = async (req, res, next) => {
  try {
    let result = await readReviewService();
    res.status(200).json({
      success: true,
      message: "These are the lists of Reviews:",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificReview = async (req, res, next) => {
  try {
    let result = await readSpecificReviewService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Review Found",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateReview = async (req, res, next) => {
  try {
    let result = await updateReviewService(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "Review updated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteReview = async (req, res, next) => {
  try {
    let result = await deleteReviewService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
