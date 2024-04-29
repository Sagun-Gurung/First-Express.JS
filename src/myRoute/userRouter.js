import { Router } from "express";
import {
  createUser,
  deleteUser,
  readSpecificUser,
  readUser,
  updateUser,
  loginUserController,
} from "../controller/userController.js";

let userRouter = Router();

userRouter.route("/").post(createUser).get(readUser);

userRouter
  .route("/:id")
  .get(readSpecificUser)
  .patch(updateUser)
  .delete(deleteUser);

userRouter.route("/login").post(loginUserController);

export default userRouter;
