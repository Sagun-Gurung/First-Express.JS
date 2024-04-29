import {
  createTraineeService,
  deleteTraineeService,
  readSpecificTraineeService,
  readTraineeService,
  updateTraineeService,
} from "../service/traineeService.js";

export let createTrainee = async (req, res, next) => {
  try {
    let result = await createTraineeService(req.body);
    res.status(201).json({
      success: true,
      message: "New Trainee added successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readTrainee = async (req, res, next) => {
  try {
    let result = await readTraineeService();
    res.status(200).json({
      success: true,
      message: "These are the lists of Trainees:",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificTrainee = async (req, res, next) => {
  try {
    let result = await readSpecificTraineeService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Trainee Found",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateTrainee = async (req, res, next) => {
  try {
    let result = await updateTraineeService(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "Trainee updated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteTrainee = async (req, res, next) => {
  try {
    let result = await deleteTraineeService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Trainee deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
