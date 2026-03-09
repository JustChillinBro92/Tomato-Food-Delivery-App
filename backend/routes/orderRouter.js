import express from "express";
import { placeOrder, userOrders, verifyOrder, listOrders, updateStatus } from "../controllers/orderController.js";
import authMiddleWare from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleWare, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.get("/userorders", authMiddleWare, userOrders);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateStatus);

export default orderRouter;