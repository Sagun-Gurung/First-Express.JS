import { Schema } from "mongoose";

let bookSchema = Schema(
  {
    name: {
      required: true,
      type: String,
    },
    author: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: Number,
    },
    isAvailability: {
      required: true,
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default bookSchema;
