import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    rating: { type: Number, required: true },
    cuisine: { type: String, required: true },
    image: { type: String, required: true }
});

const restaurantModel = mongoose.models.restaurants || mongoose.model("restaurants", restaurantSchema);
export default restaurantModel;