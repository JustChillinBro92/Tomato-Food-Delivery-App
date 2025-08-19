import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://tomato-admin:1035653510@cluster0.tfnzdg1.mongodb.net/tomato'
    )
    .then(() => console.log("DB connected!"));
};
