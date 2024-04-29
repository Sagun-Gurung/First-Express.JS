import { Trainee } from "../schema/model.js";

export let createTraineeService = async (data) => {
  return await Trainee.create(data);
};

export let readTraineeService = async () => {
  return await Trainee.find({});
};

export let readSpecificTraineeService = async (id) => {
  return await Trainee.findById(id);
};

export let updateTraineeService = async (id, data) => {
  return await Trainee.findByIdAndUpdate(id, data, { new: true });
};

export let deleteTraineeService = async (id) => {
  return await Trainee.findByIdAndDelete(id);
};
