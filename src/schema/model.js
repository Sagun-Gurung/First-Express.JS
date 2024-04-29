/* define array = > moobjectdel
name, object
Student = [
    {name: " ", age:  , isMarried: true/false}, {}.....
] */

import { model } from "mongoose";
import bookSchema from "./bookSchema.js";
import collegeSchema from "./collegeSchema.js";
import departmentSchema from "./departmentSchema.js";
import productSchema from "./productSchema.js";
import reviewSchema from "./reviewSchema.js";
import studentSchema from "./studentSchema.js";
import teacherSchema from "./teacherSchema.js";
import traineeSchema from "./traineeSchema.js";
import userSchema from "./userSchema.js";
import classroomSchema from "./classroomSchema.js";

export let Student = model("Student", studentSchema);
export let Teacher = model("Teacher", teacherSchema);
export let Book = model("Book", bookSchema);

export let Trainee = model("Trainee", traineeSchema);
export let College = model("College", collegeSchema);
export let Classroom = model("Classroom", classroomSchema);
export let Department = model("Department", departmentSchema);

export let Product = model("Product", productSchema);
export let User = model("User", userSchema);
export let Review = model("Review", reviewSchema);

/* first letter of model name must be capital and singular
    Variable name and model name must be same */
