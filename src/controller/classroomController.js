import {
  createClassroomService,
  deleteClassroomService,
  readClassroomService,
  readSpecificClassroomService,
  updateClassroomService,
} from "../service/classroomService.js";

export let createClassroom = async (req, res, next) => {
  try {
    let result = await createClassroomService(req.body);
    res.status(201).json({
      success: true,
      message: "New Classroom added successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readClassroom = async (req, res, next) => {
  try {
    let result = await readClassroomService();
    res.status(200).json({
      success: true,
      message: "These are the lists of Classrooms:",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificClassroom = async (req, res, next) => {
  try {
    let result = await readSpecificClassroomService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Classroom Found",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateClassroom = async (req, res, next) => {
  try {
    let result = await updateClassroomService(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "Classroom updated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteClassroom = async (req, res, next) => {
  try {
    let result = await deleteClassroomService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Classroom deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
