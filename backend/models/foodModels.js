import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: { type:String, required:true },
    description: { type:String, required:true },
    price: { type:Number, required:true },
    category: { type:String, required:true },
    image: { type:String, required:true },
    restaurantId: { type: mongoose.Schema.Types.ObjectId, required:true, ref: "restaurants" },
})

const foodModel = mongoose.model.foods || mongoose.model("foods", foodSchema);
export default foodModel;