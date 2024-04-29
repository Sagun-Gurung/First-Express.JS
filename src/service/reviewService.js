import { Review } from "../schema/model.js";

export let createReviewService = async (data) => {
  return await Review.create(data);
};

export let readReviewService = async () => {
  return await Review.find({})
    .populate("user", "name")
    .populate("product", "name price");
};

export let readSpecificReviewService = async (id) => {
  return await Review.findById(id)
    .populate("user", "name")
    .populate("product", "name price");
};

export let updateReviewService = async (id, data) => {
  return await Review.findByIdAndUpdate(id, data, { new: true });
};

export let deleteReviewService = async (id) => {
  return await Review.findByIdAndDelete(id);
};
