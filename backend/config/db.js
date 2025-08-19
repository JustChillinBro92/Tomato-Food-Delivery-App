import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const username = process.env.DBuser;
const password = process.env.password;

export const connectDB = async () => {    
  await mongoose
    .connect(
      `mongodb+srv://${username}:${password}@cluster0.tfnzdg1.mongodb.net/tomato`
    )
    .then(() => console.log("DB connected!"));
};
