import { Schema } from "mongoose";

let classroomSchema = new Schema(
  {
    name: {
      required: true,
      type: String,
    },
    numberOfBench: {
      required: true,
      type: Number,
    },
    hasTv: {
      required: true,
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default classroomSchema;
