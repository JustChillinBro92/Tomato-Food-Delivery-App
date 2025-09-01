import express from "express";
import cors from "cors";
import 'dotenv/config'

import { connectDB } from "./config/db.js";

import foodRouter from "./routes/foodRouter.js";
import userRouter from "./routes/userRouter.js";

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));

app.get("/", (req, res) => {
    res.send("API is working!");
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})

