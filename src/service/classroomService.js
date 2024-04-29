import { Classroom } from "../schema/model.js";

export let createClassroomService = async (data) => {
  return await Classroom.create(data);
};

export let readClassroomService = async () => {
  return await Classroom.find({});
};

export let readSpecificClassroomService = async (id) => {
  return await Classroom.findById(id);
};

export let updateClassroomService = async (id, data) => {
  return await Classroom.findByIdAndUpdate(id, data, { new: true });
};

export let deleteClassroomService = async (id) => {
  return await Classroom.findByIdAndDelete(id);
};
