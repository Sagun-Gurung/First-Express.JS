import { Student } from "../schema/model.js";

export let createStudentService = async (data = {}) => {
  return await Student.create(data);
};

export let readStudentService = async () => {
  // return await Student.find({}); it gives all the data in the database
  // return await Student.find({ name: "c" }).select("-password");
  // ("name password phoneNumber -_id")
  return await Student.find();
};

export let readAllStudentService = async (
  query = {},
  sort = null,
  skip = 0,
  limit = 10
) => {
  // query = name: "sagun"
  // let { sort, ...myQuery } = query;
  // totalDataInPage =3
  //pageNo = 2

  return await Student.find({}).skip(skip).limit(limit);
};

export let readSpecificStudentService = async (id = "") => {
  return await Student.findById(id);
};

export let updateStudentService = async (id = "", data = {}) => {
  return await Student.findByIdAndUpdate(id, data, { new: true });
};

export let deleteStudentService = async (id = "") => {
  return await Student.findByIdAndDelete(id);
};
