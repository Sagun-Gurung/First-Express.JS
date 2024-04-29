import { Router } from "express";
import {
  createCollege,
  deleteCollege,
  readCollege,
  readSpecificCollege,
  updateCollege,
} from "../controller/collegeController.js";

let CollegeRouter = Router();

CollegeRouter.route("/").post(createCollege).get(readCollege);

CollegeRouter.route("/:id")
  .get(readSpecificCollege)
  .patch(updateCollege)
  .delete(deleteCollege);

export default CollegeRouter;
