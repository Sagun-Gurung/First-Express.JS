import { Router } from "express";
import {
  createTeacher,
  deleteTeacher,
  readSpecificTeacher,
  readTeacher,
  updateTeacher,
} from "../controller/teacherController.js";
import { teacherValidation } from "../validation/teacherValidation.js";
import validation from "../validation/productValidation.js";

let teacherRouter = Router();

teacherRouter
  .route("/")
  .post(validation(teacherValidation), createTeacher)
  .get(readTeacher);

teacherRouter
  .route("/:id")
  .get(readSpecificTeacher)
  .patch(updateTeacher)
  .delete(deleteTeacher);

export default teacherRouter;
