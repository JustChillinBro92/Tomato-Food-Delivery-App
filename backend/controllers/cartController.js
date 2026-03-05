import userModel from "../models/userModels.js";

// add item to cart
const addToCart = async (req, res) => {
    try {
        const userId = req.userId;
        const { foodId, restaurantId } = req.body;

        const userData = await userModel.findById(userId);
        if(!userData)
            return res.json({ success: false, message: "User not found!" });

        // if cart does not exist for user
        if(!userData.cartData || !userData.cartData.restaurantId) {
            userData.cartData = {
                restaurantId: restaurantId,
                items: {
                    [foodId]: 1,
                }
            };
        }

        // if cart for one restaurant exists already for user
        else if(userData.cartData.restaurantId.toString() === restaurantId) {
            userData.cartData.items[foodId] = (userData.cartData.items[foodId] || 0) + 1;
            // mark modified to persist change in DB
            userData.markModified('cartData.items'); 
        } else {
            res.json({ success: false, message: "You can only add items from one restaurant!" })
        }

        await userData.save();
        res.json({success: true, message: "Added to cart!", cart: userData.cartData})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Server Error!" })
    }
}

// remove item from cart
const removeFromCart = async (req, res) => {
    try {
        const userId = req.userId;
        const { foodId } = req.body;

        const userData = await userModel.findById(userId);
        if(!userData)
            return res.json({ success: false, message: "User not found!" });

        // if cart has no items (empty)
        if(!userData.cartData || !userData.cartData.items || Object.keys(userData.cartData.items).length === 0)
            return res.json({ success: false, message: "Cart is empty!" });
        
        // if cart has items
        const items = userData.cartData.items;

        // if food entry does not exist in items
        if(!items[foodId]) return res.json({ success: false, message: "Food does not exist!"})

        // if quant > 1 decrease by 1, if quant = 0 delete entry
        if(items[foodId] > 1) items[foodId] -= 1;
        else delete items[foodId];

        // after quant update if cart empty remove restaurantId, else mark modified
        if(Object.keys(items).length === 0) userData.cartData = {};
        else userData.markModified('cartData.items');

        await userData.save();
        res.json({success: true, message: "Removed from cart!", cart: userData.cartData})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Server Error!" })
    }
}

// list all items in a user's cart
const getCart = async (req, res) => {
    try {
        const userId = req.userId;
        const userData = await userModel.findById(userId);
        if(!userData)
            return res.json({ success: false, message: "User not found!" });

        res.json({success: true, message: "Fetched user cart!", cart: userData.cartData});
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Server Error!" })
    }
}

export {addToCart, removeFromCart, getCart};