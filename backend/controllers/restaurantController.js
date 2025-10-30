import restaurantModel from "../models/restaurantModels.js";
import fs from "fs";

// add restaurant item
const addRestaurant = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const restaurant = new restaurantModel({
        name: req.body.name,
        description: req.body.description,
        location: req.body.location,
        rating: req.body.rating,
        cuisine: req.body.cuisine,  
        image: image_filename, 
    })
    try {
        // save restaurant data in DB
        await restaurant.save();
        res.json({success: true, message: "Restaurant Added Successfully!"});
    } catch (error) {
        res.json({success: false, message: "Error! Something went wrong"});
    }
}

// list all restaurant items
const listRestaurant = async (req, res) => {
    try {
        const restaurants = await restaurantModel.find({});
        res.json({success: true, data: restaurants});
    } catch (error) {
        res.json({success: false, message: "Error! Something went wrong"});
    }
}

// remove restaurant item
const removeRestaurant = async (req, res) => {
    try {
        const restaurant = await restaurantModel.findById(req.body.id);

        // remove from uploads folder
        fs.unlink(`uploads/restaurants/${restaurant.image}`, (err) => {
            if(err) throw err;
            console.log(`uploads/restaurants/${restaurant.image} was deleted!`);
        })
        
        // remove from mongoDB
        await restaurantModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Restaurant Deleted Succesfully"})
    } catch (error) {
        res.json({success: false, message: "Error! Something went wrong"});
    }
}

export {addRestaurant, listRestaurant, removeRestaurant};