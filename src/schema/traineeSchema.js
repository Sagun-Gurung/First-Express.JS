import { Schema } from "mongoose";

let traineeSchema = Schema(
  {
    name: {
      required: true,
      type: String,
    },
    class: {
      required: true,
      type: Number,
    },
    faculty: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

export default traineeSchema;
