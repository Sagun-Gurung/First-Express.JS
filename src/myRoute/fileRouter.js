import { Router } from "express";
import {
  createFileController,
  createMultipleFilesController,
} from "../controller/fileController.js";
import upload from "../utils/uploadFile.js";

let fileRouter = Router();

fileRouter.route("/single").post(upload.single("file1"), createFileController); //createFileController has req.file
fileRouter
  .route("/multiple")
  .post(upload.array("multiplefile1"), createMultipleFilesController);

export default fileRouter;
