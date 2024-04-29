import mongoose from "mongoose";
import { dbUrl } from "../constant.js";

const connectToMongoDb = () => {
  mongoose.connect(dbUrl);
  console.log("Application is connected to MongoDb successfully");
};

export default connectToMongoDb;
