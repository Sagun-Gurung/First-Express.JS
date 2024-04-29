import { Router } from "express";
import { Trainee } from "../schema/model.js";

let traineeRouter = Router();

traineeRouter.route("/").post((req, res, next) => {
  // res.json("Trainee Post");
  let data = req.body;
  Trainee.create(data);
  res.json({
    success: true,
  });
});

export default traineeRouter;
