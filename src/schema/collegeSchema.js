import { Schema } from "mongoose";

let collegeSchema = Schema(
  {
    name: {
      required: true,
      type: String,
    },
    location: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

export default collegeSchema;
