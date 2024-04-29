import { College } from "../schema/model.js";

export let createCollegeService = async (data) => {
  return await College.create(data);
};

export let readCollegeService = async () => {
  return await College.find({});
};

export let readSpecificCollegeService = async (id) => {
  return await College.findById(id);
};

export let updateCollegeService = async (id, data) => {
  return await College.findByIdAndUpdate(id, data, { new: true });
};

export let deleteCollegeService = async (id) => {
  return await College.findByIdAndDelete(id);
};
