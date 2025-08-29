import foodModel from "../models/foodModels.js";
import fs from "fs";

// add food item
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,  
        image: image_filename, 
    })
    try {
        await food.save();
        res.json({success: true, message: "Food Added Successfully!"});
    } catch (error) {
        res.json({success: false, message: "Error! Something went wrong"});
    }
}

// list all food items
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success: true, data: foods});
    } catch (error) {
        res.json({success: false, message: "Error! Something went wrong"});
    }
}

// remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);

        // remove from uploads folder
        fs.unlink(`uploads/${food.image}`, (err) => {
            if(err) throw err;
            console.log(`uploads/${food.image} was deleted!`);
        })
        
        // remove from mongoDB
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Food Deleted Succesfully"})
    } catch (error) {
        res.json({success: false, message: "Error! Something went wrong"});
    }
}

export {addFood, listFood, removeFood};