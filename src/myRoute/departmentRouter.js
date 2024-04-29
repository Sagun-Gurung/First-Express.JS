import { Router } from "express";
import {
  createDepartment,
  deleteDepartment,
  readDepartment,
  readSpecificDepartment,
  updateDepartment,
} from "../controller/departmentController.js";

let departmentRouter = Router();

departmentRouter.route("/").post(createDepartment).get(readDepartment);

departmentRouter
  .route("/:id")
  .get(readSpecificDepartment)
  .patch(updateDepartment)
  .delete(deleteDepartment);

export default departmentRouter;
