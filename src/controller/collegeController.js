import {
  createCollegeService,
  deleteCollegeService,
  readCollegeService,
  readSpecificCollegeService,
  updateCollegeService,
} from "../service/collegeService.js";

export let createCollege = async (req, res, next) => {
  try {
    let result = await createCollegeService(req.body);
    res.status(201).json({
      success: true,
      message: "New College added successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readCollege = async (req, res, next) => {
  try {
    let result = await readCollegeService();
    res.status(200).json({
      success: true,
      message: "These are the lists of Colleges:",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificCollege = async (req, res, next) => {
  try {
    let result = await readSpecificCollegeService(req.params.id);
    res.status(200).json({
      success: true,
      message: "College Found",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateCollege = async (req, res, next) => {
  try {
    let result = await updateCollegeService(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "College updated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteCollege = async (req, res, next) => {
  try {
    let result = await deleteCollegeService(req.params.id);
    res.status(200).json({
      success: true,
      message: "College deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
