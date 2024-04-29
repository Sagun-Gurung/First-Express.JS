import { Schema } from "mongoose";

let studentSchema = new Schema(
  {
    name: {
      type: String,
      lowercase: true,
      trim: true,
      minLength: [3, "Name must be more than 3 character"],
      maxLength: [25, "Name must not be more than 25 characters"],
    },
    password: { type: String },
    phoneNumber: {
      type: Number,
      required: [true, "name field is required"],
      validate: (value) => {
        if (value.toString().length !== 10)
          throw new Error("Phone number must consist 10 digits");
      },
      // min: [1000000000, "Phone number must be of 10 digits"],
      // max: [999999999, "Phone number must be of 10 digits"],
    }, //name must be resembled with field name
    roll: {
      type: Number,
      min: [400, "ROll must be more than 400"],
      max: [500, "Roll must be less than 500"],
    },
    isMarried: { type: Boolean, default: false },
    email: { type: String },
    gender: {
      type: String,
      // default: "male"
      validate: (value) => {
        // if (value !== "Male" && value !== "Female" && value !== "other")
        //   throw new Error("Please input correct gender");
        if (value === "male" || value === "female" || value === "other");
        else throw new Error("Please input correct gender");
      },
    },
    dob: { type: Date, default: new Date() },
    location: {
      country: { type: String },
      exactLocation: { type: String },
    },
    favTeacher: [{ type: String }],
    favSubject: [
      {
        bookName: { type: String },
        bookAuthor: { type: String },
      },
    ],
  },
  { timestamps: true }
);

export default studentSchema;
