import { Department } from "../schema/model.js";

export let createDepartmentService = async (data) => {
  return await Department.create(data);
};

export let readDepartmentService = async () => {
  return await Department.find({});
};

export let readSpecificDepartmentService = async (id) => {
  return await Department.findById(id);
};

export let updateDepartmentService = async (id, data) => {
  return await Department.findByIdAndUpdate(id, data, { new: true });
};

export let deleteDepartmentService = async (id) => {
  return await Department.findByIdAndDelete(id);
};
