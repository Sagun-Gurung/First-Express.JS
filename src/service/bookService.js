import { Book } from "../schema/model.js";

export let createBookService = async (data) => {
  return await Book.create(data);
};

export let readBookService = async () => {
  return await Book.find({});
};

export let readSpecificBookService = async (id) => {
  return await Book.findById(id);
};

export let updateBookService = async (id, data) => {
  return await Book.findByIdAndUpdate(id, data, { new: true });
};

export let deleteBookService = async (id) => {
  return await Book.findByIdAndDelete(id);
};
