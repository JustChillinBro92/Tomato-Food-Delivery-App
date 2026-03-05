import orderModel from "../models/orderModels.js";
import userModel from "../models/userModels.js";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// place customer order
const placeOrder = async (req, res) => {
    const frontend_url = "http://localhost:5173";
    try {
        const newOrder = new orderModel({
            userId: req.userId,
            restaurantId: req.body.restaurantId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        })
        await newOrder.save();

         // convert items object -> array for Stripe
        const line_items = Object.entries(req.body.items).map(([foodId, item]) => ({
            price_data: {
                currency:"usd",
                product_data: {
                    name: item.name
                },
                unit_amount: item.price*100
            },
            quantity: item.quantity
        }))

        line_items.push({
            price_data: {
                currency:"usd",
                product_data: {
                    name: "Delivery Charges"
                },
                unit_amount: 2*100
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`
        })

        res.json({ success: true, session_url: session.url });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Server Error!" });
    }
}

// verify order paid for or not
const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;
    try {
        const order = await orderModel.findById(orderId);
        if (!order) {
            return res.json({ success: false, message: "Order not found!" });
        }

        if(success === "true") {
            // empty user cartData and update payment status in orderData
            await userModel.findByIdAndUpdate(order.userId, {cartData: {}});
            await orderModel.findByIdAndUpdate(orderId, {    
                status: "Order Confirmed!",
                payment: true,
            });

            res.json({ success: true, message: "Paid!" });
        } else {
            // delete orderData for payment failure
            await orderModel.findByIdAndDelete(orderId);
            res.json({ success: false, message: "Not paid!" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Server Error!" });       
    }
}

// list all orders of a user
const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.userId });
        res.json({ success: true, data: orders});
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Server Error!"});
    }
}

// list all orders made till date
const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({success: true, data: orders});
    } catch (error) {
        res.json({success: false, message: "Error! Something went wrong"});
    }
}

export { placeOrder, verifyOrder, userOrders, listOrders }