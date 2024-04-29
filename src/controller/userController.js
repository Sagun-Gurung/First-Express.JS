import { User } from "../schema/model.js";
import {
  createUserService,
  deleteUserService,
  readSpecificUserService,
  readUserService,
  updateUserService,
} from "../service/userService.js";
import bcrypt from "bcrypt";
import { sendEmail } from "../utils/sendMail.js";

export let createUser = async (req, res, next) => {
  try {
    let data = req.body;
    data.password = await bcrypt.hash(data.password, 10);
    let result = await createUserService(data);
    await sendEmail({
      // from: '"Fred Foo" <nitanthapa425@gmail.com>',
      to: ["sagungurung614@gmail.com", "dikshyabhandari01@gmail.com"],
      // cc: ["jenishhona0@gmail.com"],
      // bcc: ["sambhuc45@gmail.com"],
      subject: "~~~~~~~~Hey There ~~~~~~~",
      html: `<h1> Ola ~~~~~~ <h1>`,
    });
    console.log("email is sent successfully");

    res.status(201).json({
      success: true,
      message: "New User added successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readUser = async (req, res, next) => {
  try {
    let result = await readUserService();
    res.status(200).json({
      success: true,
      message: "These are the lists of Users:",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificUser = async (req, res, next) => {
  try {
    let result = await readSpecificUserService(req.params.id);
    res.status(200).json({
      success: true,
      message: "User Found",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateUser = async (req, res, next) => {
  try {
    let result = await updateUserService(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "User updated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteUser = async (req, res, next) => {
  try {
    let result = await deleteUserService(req.params.id);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let loginUserController = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  //check if email exist or not  (if not) throw error
  let user = await User.findOne({ email: email }); //returns data in object

  if (user === null) {
    res.status(404).json({
      success: false,
      message: "Email or Password doesn't match",
    });
  } else {
    let dbPassword = user.password;
    let isValidPassword = await bcrypt.compare(password, dbPassword);

    if (isValidPassword)
      res.status(200).json({
        success: true,
        message: "Login Successful",
      });
    else
      res.status(400).json({
        success: false,
        message: "Email or Password does not match",
      });
  }
};
