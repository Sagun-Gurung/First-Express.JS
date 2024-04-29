import { Schema } from "mongoose";

let productSchema = new Schema(
  {
    name: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: Number,
    },
    quantity: {
      required: true,
      type: Number,
    },
  },
  { timestamps: true }
);

export default productSchema;
