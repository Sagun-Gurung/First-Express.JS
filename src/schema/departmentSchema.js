import { Schema } from "mongoose";

let departmentSchema = new Schema(
  {
    name: {
      required: true,
      type: String,
    },
    hod: {
      required: true,
      type: String,
    },
    totalMember: {
      required: true,
      type: Number,
    },
  },
  { timestamps: true }
);

export default departmentSchema;
