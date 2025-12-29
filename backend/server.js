import express from "express";
import cors from "cors";
import 'dotenv/config'

import { connectDB } from "./config/db.js";

import userRouter from "./routes/userRouter.js";
import cartRouter from "./routes/cartRouter.js";
import foodRouter from "./routes/foodRouter.js";
import restaurantRouter from "./routes/restaurantRouter.js"

// app config
const app = express();
// const port = process.env.PORT || 4000;
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter)
app.use("/api/restaurant", restaurantRouter);
app.use("/api/food", foodRouter);
app.use("/images/food", express.static('uploads/foods'));
app.use("/images/restaurant", express.static('uploads/restaurants'));

app.get("/", (req, res) => {
    res.send("API is working!");
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})

