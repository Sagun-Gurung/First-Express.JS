import { Schema } from "mongoose";

let userSchema = Schema(
  {
    fullName: {
      required: true,
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    email: {
      unique: true,
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
      trim: true,
      default: "male",
    },
    dob: {
      type: Date,
      required: true,
      trim: true,
    },
    isMarried: {
      type: Boolean,
      trim: true,
    },
  },
  { timestamps: true }
);

export default userSchema;
