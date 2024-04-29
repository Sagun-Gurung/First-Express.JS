import { Router } from "express";
import {
  createClassroom,
  deleteClassroom,
  readClassroom,
  readSpecificClassroom,
  updateClassroom,
} from "../controller/classRoomController.js";

let classroomRouter = Router();

classroomRouter.route("/").post(createClassroom).get(readClassroom);

classroomRouter
  .route("/:id")
  .get(readSpecificClassroom)
  .patch(updateClassroom)
  .delete(deleteClassroom);

export default classroomRouter;
