import {
  createTeacherService,
  deleteTeacherService,
  readSpecificTeacherService,
  readTeacherService,
  updateTeacherService,
} from "../service/teacherService.js";

export let createTeacher = async (req, res, next) => {
  try {
    let result = await createTeacherService(req.body);
    res.status(200).json({
      success: true,
      message: "New Teacher added successfully",
      result: result,
    });
    // console.log(result);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readTeacher = async (req, res, next) => {
  // console.log("This is request dot query", req.query);
  try {
    let { totalDataInPage, pageNo, sort, ...myQuery } = req.query;
    let limit = totalDataInPage;
    let skip = (pageNo - 1) * totalDataInPage;
    let result = await readTeacherService(myQuery, sort, skip, limit);
    res.status(200).json({
      success: true,
      message: "These are the lists of Teachers:",
      result: result,
    });
    // console.log(result);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificTeacher = async (req, res, next) => {
  try {
    let result = await readSpecificTeacherService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Teacher Found",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateTeacher = async (req, res, next) => {
  try {
    let result = await updateTeacherService(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "Teacher updated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteTeacher = async (req, res, next) => {
  try {
    let result = await deleteTeacherService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Teacher deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
