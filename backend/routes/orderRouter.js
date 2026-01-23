import express from "express";
import { placeOrder, userOrders, verifyOrder } from "../controllers/orderController.js";
import authMiddleWare from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleWare, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.get("/userorders", authMiddleWare, userOrders);

export default orderRouter;