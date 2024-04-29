import {
  createDepartmentService,
  deleteDepartmentService,
  readDepartmentService,
  readSpecificDepartmentService,
  updateDepartmentService,
} from "../service/departmentService.js";

export let createDepartment = async (req, res, next) => {
  try {
    let result = await createDepartmentService(req.body);
    res.status(201).json({
      success: true,
      message: "New Department added successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readDepartment = async (req, res, next) => {
  try {
    let result = await readDepartmentService();
    res.status(200).json({
      success: true,
      message: "These are the lists of Departments:",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificDepartment = async (req, res, next) => {
  try {
    let result = await readSpecificDepartmentService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Department Found",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateDepartment = async (req, res, next) => {
  try {
    let result = await updateDepartmentService(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "Department updated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteDepartment = async (req, res, next) => {
  try {
    let result = await deleteDepartmentService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Department deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
