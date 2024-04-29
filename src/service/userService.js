import { User } from "../schema/model.js";

export let createUserService = async (data) => {
  return await User.create(data);
};

export let readUserService = async () => {
  return await User.find({});
};

export let readSpecificUserService = async (id) => {
  return await User.findById(id);
};

export let updateUserService = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

export let deleteUserService = async (id) => {
  return await User.findByIdAndDelete(id);
};
