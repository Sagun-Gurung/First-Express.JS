import { Schema } from "mongoose";

let reviewSchema = Schema(
  {
    user: {
      required: true,
      type: Schema.ObjectId,
      ref: "User",
    },
    product: {
      required: true,
      type: Schema.ObjectId,
      ref: "Product",
    },
    message: {
      required: true,
      type: String,
    },
    rating: {
      required: true,
      type: Number,
    },
  },
  { timestamps: true }
);

export default reviewSchema;
