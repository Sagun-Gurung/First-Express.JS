import { query } from "express";
import {
  createStudentService,
  deleteStudentService,
  readAllStudentService,
  readSpecificStudentService,
  readStudentService,
  updateStudentService,
} from "../service/studentService.js";

export let createStudent = async (req, res, next) => {
  //   let data = req.body;
  try {
    // let result = await Student.create(data); this part is from database hence the process is done separately
    let result = await createStudentService(req.body);
    res.status(201).json({
      success: true,
      message: "Student data added successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// export let readStudent = async (req, res, next) => {
//   try {
//     // let data = await Student.find({}); //async function
//     let result = await readStudentService();
//     res.status(200).json({
//       success: true,
//       message: "Student Database Read Successfully",
//       result: result,
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

export const readAllStudent = async (req, res, next) => {
  // let { totalDataInPage, page } = req.query;
  // let limit = Number(totalDataInPage);
  // let skip = (Number(page) - 1) * totalDataInPage;

  try {
    // let data = await Student.find({}); //async function
    let { totalDataInPage = 10, pageNo = 1, sort, ...myQuery } = req.query;
    let limit = totalDataInPage;
    let skip = (pageNo - 1) * totalDataInPage;
    let result = await readAllStudentService(myQuery, sort, skip, limit);
    res.status(200).json({
      success: true,
      message: "Student Database Read Successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificStudent = async (req, res, next) => {
  // console.log(req.params)
  // let id = req.params.id;

  try {
    // let result = await Student.findById(req.params.id);
    let result = await readSpecificStudentService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Student read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Student not found on that id",
      error: error.message,
    });
  }
};

export let updateStudent = async (req, res, next) => {
  try {
    // let result = await Student.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    // });

    let result = await updateStudentService(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "Students updated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteStudent = async (req, res, next) => {
  try {
    // let result = await Student.findByIdAndDelete(req.params.id);
    let result = await deleteStudentService(req.params.id);
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
