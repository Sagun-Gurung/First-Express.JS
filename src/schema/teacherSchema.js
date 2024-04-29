import { Schema } from "mongoose";

let teacherSchema = Schema(
  {
    fullName: {
      required: true,
      type: String,
    },
    age: {
      required: true,
      type: Number,
    },
    isMarried: {
      required: true,
      type: Boolean,
    },
    subject: {
      required: true,
      type: String,
    },
    profileImage: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

export default teacherSchema;
