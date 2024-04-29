import { Teacher } from "../schema/model.js";

export let createTeacherService = async (data) => await Teacher.create(data);

export let readTeacherService = async (
  query = {},
  // sort = null,
  sort = "-createdAt",
  skip = 0,
  limit = 10
) => {
  return await Teacher.find(query).sort(sort).skip(skip).limit(limit);
};

export let readSpecificTeacherService = async (id) =>
  await Teacher.findById(id);

export let updateTeacherService = async (id, data) =>
  await Teacher.findByIdAndUpdate(id, data, { new: true });

export let deleteTeacherService = async (id) =>
  await Teacher.findByIdAndDelete(id);
