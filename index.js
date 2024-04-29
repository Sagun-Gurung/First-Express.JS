import express, { json } from "express";

import connectToMongoDb from "./src/connectdb/connectToMongoDb.js";
import bookRouter from "./src/myRoute/bookRouter.js";
import classroomRouter from "./src/myRoute/classroomRouter.js";
import collegeRouter from "./src/myRoute/collegeRouter.js";
import productRouter from "./src/myRoute/productRoute.js";
import reviewRouter from "./src/myRoute/reviewRoute.js";
import studentRouter from "./src/myRoute/studentRoute.js";
import teacherRouter from "./src/myRoute/teacherRouter.js";
// import traineeRoute from "./src/myRoute/traineeRoute.js";
import departmentRouter from "./src/myRoute/departmentRouter.js";
import traineeRouter from "./src/myRoute/traineeRouter.js";
import userRouter from "./src/myRoute/userRouter.js";
import fileRouter from "./src/myRoute/fileRouter.js";
import { port } from "./src/constant.js";
import cors from "cors";

let expressApp = express();

expressApp.use(cors());
expressApp.use(json());
connectToMongoDb();

// expressApp.use(
//   (req, res, next) => {
//     console.log("This is Normal Middleware 1 in Application");
//     let err = new Error("Application Error!!!!!!!!!");
//     next(err);
//   },
//   (req, res, next) => {
//     console.log("This is Normal Middleware 2 in Application");
//   },
//   (req, res, next) => {
//     console.log("This is Normal Middleware 2 in Application ");
//     next(err);
//   },
//   (err, req, res, next) => {
//     console.log(err.message);
//   }
// );

// expressApp.use("/trainees", traineesRouter);

// expressApp.use("/", firstRouter);
// expressApp.use("/names", nameRouter);
// expressApp.use("/bikes", bikeRouter);
// expressApp.use("/students", studentRouter)

// expressApp.use("/books", bookRoute);

expressApp.use(express.static("./public")); //making the static fodler 'public' to access files and images through link
expressApp.use("/classrooms", classroomRouter);
expressApp.use("/colleges", collegeRouter);
expressApp.use("/departments", departmentRouter);
expressApp.use("/students", studentRouter);
expressApp.use("/products", productRouter);

expressApp.use("/users", userRouter);
expressApp.use("/reviews", reviewRouter);
expressApp.use("/teachers", teacherRouter);
expressApp.use("/books", bookRouter);
expressApp.use("/trainees", traineeRouter);

expressApp.use("/files", fileRouter);

expressApp.listen(port, () => {
  console.log("app is listening at port 8000");
});
