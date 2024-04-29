import { Router } from "express";
import {
  createStudent,
  deleteStudent,
  readAllStudent,
  readSpecificStudent,
  updateStudent,
} from "../controller/studentController.js";

let studentRouter = Router();

studentRouter.route("/").post(createStudent).get(readAllStudent);

studentRouter
  .route("/:id")
  .get(readSpecificStudent)
  .patch(updateStudent)
  .delete(deleteStudent);
export default studentRouter;
